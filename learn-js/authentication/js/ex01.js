// const loginUrl = `https://api.escuelajs.co/api/v1/auth/login`;

// const handleLogin = async (email, password) => {
//     const response = await fetch(loginUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });
//     if(response.ok){
//         const data = await response.json();
//     }
// }

// handleLogin('john@mail.com','changeme');

// Bộ nhớ trình duyệt 

// localStorage.setItem('token', 123);
// const token = localStorage.getItem('token');
// console.log(token);
// localStorage.removeItem('token');
// sessionStorage.setItem('token', 123);


const root = document.getElementById('root');
const app = {
    serverAPI: 'https://api.escuelajs.co/api/v1',
    loginForm: function () {
        return `<form action="" class="login-form">
				<h2>Đăng nhập</h2>
				<div>
					<input type="email" name="email" placeholder="Email" />
				</div>
				<div>
					<input type="password" name="password" placeholder="Mật khẩu" />
				</div>
				<button>Đăng nhập</button>
			</form>`
    },
    profile: function (data = {}) {
        return `<h2>Chào mừng bạn đã quay trở lại</h2>
                <h3>Chào, ${data.name ?? "Loading..."}, <button class="logout-btn">Đăng xuất</button></h3>`;
    },
    render: async function () {
        if (this.getToken()) {
            const dataUser = await this.sendRequestProfile();
            root.innerHTML = dataUser ? this.profile(dataUser) : this.loginForm()
        } else {
            root.innerHTML = this.loginForm();
        }
        this.addEvent();
    },
    addEvent: function () {
        root.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (e.target.classList.contains("login-form")) {
                const formData = Object.fromEntries([...new FormData(e.target)]);
                await this.postGetToken(formData);
                this.render();
            }
        })
        root.addEventListener('click', (e) => {
            if (e.target.classList.contains("logout-btn")) {
                localStorage.removeItem('token');
                this.render();
            }
        })
    },
    sendRequestProfile: async function () {
        const { access_token: accessToken } = this.getToken();
        if (!accessToken) {
            return this.render();
        }
        const response = await fetch(this.serverAPI + '/auth/profile', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Gọi API Refresh-token để cấp lại access-token mới
            // Lưu access token vào localStorage
            // Gọi lại request profile
            // interceptor fetch
            const tokenNew = await this.sendRequestRefreshToken();
            if (tokenNew) {
                localStorage.setItem('token', JSON.stringify(tokenNew));
                return this.sendRequestProfile();
            }
            return false;
        }
        // } catch (e) {
        //     alert('Lỗi ' + e.message)
        // }
    },
    sendRequestRefreshToken: async function () {
        const { refresh_token: refreshToken } = this.getToken();
        const response = await fetch(this.serverAPI + '/auth/refresh-token', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
        try {
            let token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : false;
            return token;
        } catch (e) {
            return false;
        }
    },
    postGetToken: async function (formData) {
        const response = await fetch(this.serverAPI + '/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', JSON.stringify(data));
            return data;
        } else {
            alert(response.statusText);
            return;
        }
    },
    start: function () {
        this.render()
    }
}
app.start();