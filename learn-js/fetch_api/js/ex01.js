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
    _limit: 2,
}
const showUser = async () => {
    try {
        const queryString = Object.keys(query) ? `?${new URLSearchParams(query).toString()}` : '';
        const users = await (await fetch(userAPI + queryString)).json();
        root.innerHTML = "";
        root.innerHTML = fetchData(users);
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries([...new FormData(e.target)]);
    addUser(data);
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
    const user = await (await fetch(userAPI + '/' + id, {
        method: "DELETE"
    })).json();
    showUser();
}

const updateUser = async(id) => {
    const user = await (await fetch(userAPI + '/' + id, {
        method: "PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name: "User 11",email:"roniejisa@gmail.com"})
    })).json();
    console.log(user);
    showUser();
}