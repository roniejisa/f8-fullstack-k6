const root = document.querySelector('#root');

const app = {
    apiEndpoint: 'https://api-auth-two.vercel.app',
    apiLogin: '/auth/login',
    apiRegister: '/auth/register',
    apiLogout: '/auth/logout',
    apiRefreshToken: '/auth/refresh-token',
    apiUserProfile: '/users/profile',
    apiBlog: '/blogs',
    users: [

    ],
    render: async function () {
        const urlSearchParam = new URLSearchParams(window.location.search);
        let page = null;
        let token = this.getToken();
        if (!Object.keys(token).length) {
            token = false;
        }
        if (token) {
            page = await this.home();
            history.pushState({}, "", window.location.origin + window.location.pathname);
            hasUser = true;
        } else {
            switch (urlSearchParam.get('page')) {
                case null:
                    page = await this.home();
                    break;
                case 'login':
                    page = this.formLogin();
                    break;
                case 'register':
                    page = this.formRegister();
                    break;
            }
        }
        root.innerHTML = page;
        this.addEvent();
        const listDatepicker = document.querySelectorAll('input[data-type="datepicker"]');
        for (const datepickerEl of listDatepicker) {
            new NewDatePicker(datepickerEl, {}, 'event-choose-time');
        }
    },
    chooseTimeEvent: function (e) {
        if (new Date(e.value) < new Date()) {
            alert(`Vui lòng chọn lại thời gian đăng bài!✖`);
            e.element.value = "";
        } else {
            const stringTime = app.convertDate(e.value, 'string');
            alert(`Bài viết của bạn sẽ được đăng ${stringTime}`)
        }
    },
    formLogin: function () {
        return `<div>
            <form class="form-login">
                <div>
                    <label>
                        Email
                        <input name="email" class="form-control" type="email" placeholder="Email"/>
                    </label>
                </div>
                <div>
                    <label>
                        Mật khẩu
                        <input name="password" class="form-control" type="password" placeholder="Mật khẩu"/>
                    </label>
                </div>
                <div>
                    <button class="btn btn-success">Đăng nhập</button>
                    <a class="btn btn-success" href="?page=register">Đăng ký</a>
                </div>
            </form>
        </div>
        `
    },
    formRegister: function () {
        return `<div>
            <form class="form-register">
                <div>
                    <label>
                        Tên
                        <input name="name" class="form-control" type="name" placeholder="Tên"/>
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input name="email" class="form-control" type="email" placeholder="Email"/>
                    </label>
                </div>
                <div>
                    <label>
                        Mật khẩu
                        <input name="password" class="form-control" type="password" placeholder="Mật khẩu"/>
                    </label>
                </div>
                <div>
                    <button class="btn btn-success">Đăng ký</button>
                    <a class="btn btn-success" href="?page=login">Đăng nhập</a>
                </div>
            </form>
        </div>
        `
    },
    addEvent: function () {
        const _this = this;
        anchorEls = root.querySelectorAll('a');
        anchorEls.forEach(anchor => {
            anchor.onclick = function (e) {
                e.preventDefault();
                let href = anchor.getAttribute('href');
                history.pushState({}, "", window.location.origin + window.location.pathname + href);
                _this.render();
            };
        })

        root.onsubmit = async function (e) {
            e.preventDefault();
            if (e.target.classList.contains('form-register')) {
                let formData = Object.fromEntries([...new FormData(e.target)]);
                let flag = false;
                Object.values(formData).forEach(value => {
                    if (!value.trim()) {
                        flag = true;
                    }
                })
                if (flag) {
                    alert('Vui lòng điền đầy đủ thông tin!');
                    return false;
                }
                if (await _this.postRegister(formData)) {
                    history.pushState({}, "", window.location.origin + window.location.pathname + '?page=login');
                    _this.render();
                };
            }

            if (e.target.classList.contains('form-login')) {
                const formData = Object.fromEntries([...new FormData(e.target)]);
                let flag = false;

                Object.values(formData).forEach(value => {
                    if (!value.trim()) {
                        flag = true;
                    }
                })
                if (flag) {
                    alert('Vui lòng điền đầy đủ thông tin!');
                    return false;
                }

                const loginResponse = await _this.postLogin(formData);

                if (loginResponse) {
                    loginResponse.data.timeExp = new Date().getTime() + (18 * 1000);
                    localStorage.setItem('token', JSON.stringify(loginResponse.data))
                    history.pushState({}, "", window.location.origin + window.location.pathname);
                    _this.render();
                };
            }

            if (e.target.classList.contains("create-blog")) {
                const formData = Object.fromEntries([...new FormData(e.target)]);
                let flag = false;
                let date;
                if (formData.date !== null) {
                    date = formData.date;
                    delete formData.date;
                }
                Object.values(formData).forEach(value => {
                    if (!value.trim()) {
                        flag = true;
                    }
                })
                if (flag) {
                    alert('Vui lòng điền đầy đủ thông tin!');
                    return false;
                }
                if (date) {
                    const [date, month, year] = date.split('/');

                    if (new Date(`${year}/${month}/${date}`) < new Date()) {
                        alert("Thời gian không hợp lệ!");
                        return false;
                    }
                    delete formData.date;
                }

                const blogResponse = await _this.postBlog(formData);
                if (blogResponse) {
                    if (date && new Date(`${year}/${month}/${date}`) > new Date()) {
                    } else {
                        const blogEl = root.querySelector('.blog-items');
                        const checkBlogItem = Array.from(blogEl.children).some(el => el.classList.contains('blog-item'));
                        blogResponse.data.author = blogResponse.data.userId.name;
                        const htmlBlog = _this.templateBlog(blogResponse.data);

                        if (!checkBlogItem) {
                            blogEl.innerHTML = htmlBlog;
                        } else {
                            blogEl.insertAdjacentHTML('afterbegin', htmlBlog);
                        }
                    }
                }
            }

            if (e.target.classList.contains("logout")) {
                const responseLogout = await _this.postLogout();
                if (responseLogout) {
                    localStorage.removeItem('token');
                    _this.render();
                }
            }
        }
    },
    home: async function () {
        // Kiểm tra token có hợp lệ hay không
        let dataUser = await this.getProfileUser();
        this.users.push(dataUser);
        if (!dataUser) {
            return `<div class="home">
                <a href="?page=login">Đăng nhập</a>
            </div>`;
        } else {
            return `
            <div class="header-blog">
                <h2>Chào <span class="name">${dataUser.name}</span>, giờ bạn có thể đăng bài viết!</h2>
                <form class="logout">
                    <button>Đăng xuất</button>
                </form>
            </div>
            <div class="blog">
                <form class="create-blog">
                    <div>
                        <label>
                            Tiêu đề
                            <input type="text" class="form-control" name="title" placeholder="Nhập tiêu đề bài viết"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Nội dung vài viết
                            <textarea name="content" class="form-control" placeholder="Nhập nội dung"></textarea>
                        </label>
                    </div>
                    <div>
                        <label>
                            Chọn thời gian
                            <input type="text" class="form-control" name="date" data-type="datepicker"/>
                        </label>
                    </div>
                    <div>
                        <button>Đăng bài viết</button>
                    </div>
                </form>
            </div>
            <div class="blog-items">
                ${await this.renderBlog(dataUser.blogs.reverse())}
            </div>
            `
        }

    },
    renderBlog: async function (blogs) {
        const _this = this;
        const blogItems = [];
        if (blogs.length) {
            for (let i = 0; i < blogs.length; i++) {
                const blog = blogs[i];
                const user = this.users.find(user => user._id === blog.userId);
                blog.author = user.name;
                blogItems.push(_this.templateBlog(blog));
            }
            return blogItems.join('');
        }
        return `<p>Chưa có bài viết nào</p>`
    },
    getProfileUser: async function () {
        var { accessToken, refreshToken, timeExp } = this.getToken();
        // Chỗ này do biết thời gian hết hạn refresh token nên cần cập nhật khi gần hết
        if (timeExp && new Date().getTime() > timeExp) {
            await this.checkTimeRefreshToken(refreshToken);
            var { accessToken, refreshToken, timeExp } = this.getToken();
        }

        if (!accessToken) {
            return false;
        }

        const response = await fetch(this.apiEndpoint + this.apiUserProfile, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        });
        let dataUser = await response.json();
        if (response.ok) {
            return dataUser.data;
        } else {
            // Kiểm tra nếu token không còn hợp lệ thì refresh token sau đó lưu lại rồi chạy lại hàm này
            if (await this.checkTimeRefreshToken(refreshToken)) {
                return await this.getProfileUser();
            } else {
                localStorage.removeItem('token');
                return false;
            }
        }
    },
    checkTimeRefreshToken: async function (refreshToken) {
        const responseRefreshToken = await this.requestRefreshToken(refreshToken);
        if (responseRefreshToken) {
            responseRefreshToken.data.token.timeExp = new Date().getTime() + (18 * 1000);
            localStorage.setItem('token', JSON.stringify(responseRefreshToken.data.token));
            return true;
        } else {
            return false;
        }
    },
    requestRefreshToken: async function (refreshToken) {
        const response = await fetch(this.apiEndpoint + this.apiRefreshToken, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refreshToken
            })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return false;
        }
    },
    getToken: function () {
        let token = localStorage.getItem('token');
        token = token ? JSON.parse(token) : {};
        return token;
    },
    postLogin: async function (formData) {
        const response = await fetch(this.apiEndpoint + this.apiLogin, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            method: "POST"
        })
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            alert(data.message);
            // const data = await response.json();
        }
    },
    postRegister: async function (formData) {
        const response = await fetch(this.apiEndpoint + this.apiRegister, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            method: "POST"
        })
        const data = await response.json();
        if (response.ok) {
            return true;
        } else {
            alert(data.message);
        }
    },
    postBlog: async function (formData) {
        var { accessToken, refreshToken, timeExp } = this.getToken();
        // Chỗ này do biết thời gian hết hạn refresh token nên cần cập nhật khi gần hết
        if (timeExp && new Date().getTime() > timeExp) {
            await this.checkTimeRefreshToken(refreshToken);
        }

        if (!accessToken) {
            return false;
        }

        const response = await fetch(this.apiEndpoint + this.apiBlog, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(formData),
            method: "POST"
        })
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return false;
        }
    },
    postLogout: async function () {
        var { accessToken, refreshToken, timeExp } = this.getToken();
        // Chỗ này do biết thời gian hết hạn refresh token nên cần cập nhật khi gần hết
        if (timeExp && new Date().getTime() > timeExp) {
            await this.checkTimeRefreshToken(refreshToken);
        }

        if (!accessToken) {
            return false;
        }
        const response = await fetch(this.apiEndpoint + this.apiLogout, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            method: "POST"
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return false;
        }
    },
    templateBlog: function (data) {
        return `<div class="blog-item">
            <div class="date">
                <div class="date-string">${this.convertDate(data.timeUp, 'string')}</div>
                <div class="date-hours">${this.convertDate(data.timeUp, 'hours')}</div>
                <div class="date-minutes">${this.convertDate(data.timeUp, 'minutes')}</div>
            </div>
            <div class="blog-content">
                <div class="blog-author">
                    <div class="blog-avatar-author" style="background:rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})">
                        ${data.author.slice(data.author.lastIndexOf(' ') + 1).charAt(0).toUpperCase()}
                    </div>
                    <div class="blog-name-author">
                        ${data.author}
                    </div>
                </div>
                <h3 class="blog-title">${data.title}</h3>
                <p class="blog-content">${app.convertContent(data.content)}</p>
            </div>
        </div>`
    },
    convertDate: function (dateString, type) {
        const date = new Date(dateString);
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const timestamp = date.getTime();
        const dateCurrent = new Date();
        const timestampCurrent = dateCurrent.getTime();
        let millisecondDiff = timestampCurrent - timestamp;
        let stringPrefix = "trước";
        if (millisecondDiff < 0) {
            millisecondDiff = Math.abs(millisecondDiff);
            stringPrefix = "nữa";
        }
        const secondsDiff = Math.ceil(millisecondDiff / 1000);
        const minutesDiff = Math.floor(secondsDiff / 60);
        const hoursDiff = Math.floor(minutesDiff / 60);
        const daysDiff = Math.floor(hoursDiff / 24);
        const monthsDiff = Math.floor(daysDiff / 30);
        const yearsDiff = Math.floor(monthsDiff / 12);
        switch (type) {
            case 'string':
                if (yearsDiff > 0) {
                    return yearsDiff + ` năm ${stringPrefix}`
                } else if (monthsDiff > 0) {
                    return monthsDiff + ` tháng ${stringPrefix}`
                } else if (daysDiff > 0) {
                    return daysDiff + ` ngày ${stringPrefix}`
                } else if (hoursDiff > 0) {
                    return hoursDiff + ` giờ ${stringPrefix}`
                } else if (minutesDiff > 0) {
                    return minutesDiff + ` phút ${stringPrefix}`
                } else if (secondsDiff > 0) {
                    return secondsDiff + ` giây ${stringPrefix}`
                }
                break;
            case 'hours':
                return hours + ' giờ';
            case 'minutes':
                return minutes + ' phút';
        }
    },
    convertContent: function (content) {
        content = content.replace(/^(?:https|http):\/\/[a-z.]*[youtube.com\/][(a-z?/)|v=]*([a-zA-Z0-9]*)[a-z&A-Z0-9=_?]*$/g, `<iframe width="560" height="315" src="https://www.youtube.com/embed/$1/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`);
        content = content.replace(/^((?:http|https):\/\/(?:(?:[a-z]|[a-z][a-z0-9-_\.]*[a-z0-9])\.)+(?:[a-z]{2,})(?:\:[0-9]{2,})*(?:\/?|\/[^\s]+))$/g, `<a href="$1">$1</a>`);
        content = content.replace(/^([a-zA-Z][a-zA-Z0-9-_\.]+[a-zA-Z0-9]@(?:[a-zA-Z]|[a-z][a-zA-Z0-9-_\.]*[a-zA-Z0-9]).[a-zA-z]{2,})$/g, `<a href="mailto:$1">$1</a>`);
        content = content.replace(/^[+84|0][0-9]{9}$/g, `<a href="tel:$1">$1</a>`);
        return content;
    },
    start: function () {
        this.render();
        window.addEventListener('event-choose-time', app.chooseTimeEvent)
    }
}
app.start();