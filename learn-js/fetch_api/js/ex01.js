/**
 * API
 * 
 * Application Programming Interface
 * 
 * Giao diện lập trình ứng dụng
 * Cho phép các ứng dụng giao tiếp với nhau
 * 
 * Web với Web
 * Web với APP
 * Ứng dụng với thư viện
 * Ứng dụng với hệ điều hành
 * 
 * 
 * Web API: Có rất nhiều chuẩn thiết kế tuy nhiên phổ biến nhất là RESTful API
 * 
 * 
 * Người sử dụng API không cần quan tâm đến bên trong được xây dựng như thế nào
 * 
 * Chỉ cần quan tâm đến Input và Output
 * 
 * js
 * const [count,setCount] = useState(0);
 * 
 * Chỉ cần biết hàm useState() có một đối số và trả về 1 mảng, tác dụng của nó là gì?
 * 
 * Web API có các thành phần sau:
 * 
 * URL
 * Method
 * Request
 *  Header
 *  Body
 * 
 * Response
 *  Header
 *  Body
 *  Status
 * 
 * 
 * 
 * Fake server bằng JSON server
 * 
 * URL: http://localhost:3000/tenkey
 * Ví dụ http://localhost:3000/users
 * 
 */

/**
 * Trong js làm sao để gọi API
 * 
 * Dùng thư viện: axios, jquery ajax
 * 
 * Hàm có sẵn: XmlHttpRequest, fetch (*)
 */

//Hàm fetch(url, options)
/**
 * url: URL của API
 * options: Object để thiết lập http request
* Hàm fetch sẽ trả về 1 promise  
*/

const userAPI = `http://localhost:3000/users`;

// fetch(userAPI).then(response => response.json()).then(data => {
//     console.log(data);
// })
const root = document.querySelector('#root');
const query = {
    _sort: "id",
    _order: "desc",
    _limit: 3,
}
let timeout;
const filter = function () {
    const search = document.querySelector('[type="search"]');
    search.addEventListener('input', debounce((e) => {
        console.log(e);
        query.q = search.value;
        showUser();
    }))
}
filter();
const showUser = async () => {
    try {
        const queryString = Object.keys(query) ? `?${new URLSearchParams(query).toString()}` : '';
        const { _page: page } = query;
        const response = await fetch(userAPI + queryString);
        const count = response.headers.get('X-Total-Count');
        const users = await response.json();
        root.innerHTML = "";
        root.innerHTML = users.length === 0 ? `Không tìm thấy user nào !` : fetchData(users);
        let paginate = createPagination(count, page);
        root.append(paginate);
        changePage(paginate);
        root.querySelector('.users').addEventListener('click', (e) => {
            console.log(e.target.dataset.type);
            if (e.target.dataset.id && e.target.dataset.type === 'detail') {
                const userId = e.target.dataset.id;
                showDetailUser(userId);
            }

            if (e.target.dataset.id && e.target.dataset.type === 'delete') {
                if (e.target.dataset.id && confirm('Bạn có muốn xóa không?')) {
                    const userId = e.target.dataset.id;
                    deleteUser(userId);
                }
            }

            if (e.target.dataset.id && e.target.dataset.type === 'update') {
                if (e.target.dataset.id) {
                    const userId = e.target.dataset.id;
                    updateUser(userId);
                }
            }
        })
    } catch (e) {
        console.log(e.message);
    }
}
showUser();
async function showDetailUser(id) {
    const user = await (await fetch(userAPI + '/' + id)).json();
    renderUser(user);
}
function fetchData(users) {
    return `<h2>Thông tin user</h2>
        <div class="users">
            ${users.map(({ id, name, email }) => `<div class="user-item">
            <h3>${name}</h3>
            <span>${email}</span>
            <p>
            <button data-type="detail" data-id="${id}">Chi tiết</button>
            <button data-type="update" data-id="${id}">Update</button>
            <button data-type="delete" data-id="${id}">Xóa</button></p>
            </div>`).join('')}
        </div>`
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    debounce(() => {
        const data = Object.fromEntries([...new FormData(e.target)]);
        if (form.dataset.type === "update") {
            updateUserNow(data, form.dataset.id);
        } else {
            addUser(data);
        }
    })();
})

const addUser = async (data) => {
    const response = await fetch(userAPI, {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })

    if (response.ok) {
        console.log("Thành công");
        showUser();
    }
}

const renderUser = async ({ name, email }) => {
    root.innerHTML = `<div class="user">
        <h2>Chi tiết người dùng</h2>
        <p>Tên: ${name}</p>
        <p>${email}</p>
        <p>
        <button onclick="showUser()">Quay lại</button>
        </p>
    </div>`
}

const deleteUser = async (id) => {
    try {
        const user = await (await fetch(userAPI + '/' + id, {
            method: "DELETE"
        })).json();
    } catch (e) {
        alert("User không tồn tại!")
    }
    showUser();
}

const updateUser = async (id) => {
    // try {
    const user = await (await fetch(userAPI + '/' + id)).json();
    if (Object.keys(user).length === 0) {
        alert('User không tồn tại');
        return false;
    }
    form.querySelector('input[name="name"]').value = user.name;
    form.querySelector('input[name="email"]').value = user.email;
    form.querySelector('button').innerText = "Cập nhật";
    form.dataset.type = "update";
    form.dataset.id = id;
    // } catch (e) {
    //     alert("User không tồn tại");
    // }
}

var updateUserNow = async (data, id) => {
    form.querySelector('input[name="name"]').value = "";
    form.querySelector('input[name="email"]').value = "";
    form.querySelector('button').innerText = "Thêm";
    delete form.dataset.type;
    await (await fetch(userAPI + '/' + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })).json();
    showUser();
}

const createPagination = (count, page) => {
    page = page ? page : 1;
    const totalPage = Math.ceil(count / query._limit);
    const paginate = document.createElement('div');
    paginate.className = "paginate";
    paginate.innerHTML += `<a href="#" data-page="${page && page > 1 ? page - 1 : 1}">${page && page > 1 ? '<' : `<b><</b>`}</a>`
    paginate.innerHTML += Array.from(new Array(totalPage).keys()).map(index => {
        if (![1, 2, totalPage - 1, totalPage - 2].includes(+index + 1)) {
            return '';
        } else if ((index < +page - 3 || index > +page + 1)) {
            return '';
        }
        return `<a href="/?page=${index + 1}" data-page="${index + 1}">${((page && +page === index + 1) || (index + 1 === 1 && !page)) ? `<b>${index + 1}</b>` : index + 1}</a>`;
    }).join('');
    paginate.innerHTML += `<a href="#" data-page="${page && page < totalPage ? +page + 1 : totalPage}">${page && page < totalPage ? '>' : `<b>></b>`}</a>`
    return paginate;
}

const changePage = (paginate) => {
    Array.from(paginate.children).forEach(paginateBtn => {
        paginateBtn.addEventListener('click', e => {
            e.preventDefault();
            if (paginateBtn.querySelector('b')) {
                return false;
            }
            query._page = paginateBtn.dataset.page;
            showUser();
        })
    })
}
// Kỹ thuật thực thi 1 hàm khi không thao tác trong 1 khoảng thời gian

function debounce(func, timeout = 300) {
    let timer; // Lưu trữ giá trị của settimeout

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    }
}