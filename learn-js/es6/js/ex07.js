/**
 * Làm sao Javascript chạy được? 
 * 
 * Javscript Engine (Chorme V8)
 * JAvascript Runtime: Môi trường chạy được Javascript
 * Browser Api (Web APIS) --> Trình duyệt (Xây dựng sẵn các hàm: setTimeout), setInterval, fetch,...)
 * - Node
 * 
 * Cụ thể: 
 * Nếu JS chạy trên trình duyệt: Web APIs bọc V8
 * Nếu JS chạy trên Server: C++ bọc V8
 * 
 * JS là single-thread (Đơn luồng): Tại 1 thời điểm chỉ chạy 1 tác vụ
 * 
 * 
 * Cấu tạo của JS Engine
 * HEAP
 * Call Stack: Nơi chứa các tác vụ cần gọi (Tại 1 thời điểm chỉ có 1 tác vụ)
 * 
 * Bất đồng bộ (asynchronous): Các hàm dược xây dựng bỏi Javascript runtime
 * - setTimeout()
 * - setInterval()
 * Event
 * fetch()
 */


// function getUsers(cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User Data")
//         }, 1000);
//     })
// }

// function showMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hiển thị thành công");
//         }, 0);
//     });
// }

// function displayUser() {
//     return new Promise((resolve, reject) => {
//         resolve("Display user");
//     })
// }

// getUsers().finally(() => {
//     console.log('a')
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log('a')
// }).then(data => {
//     console.log(data);
//     return showMessage();
// }).finally(() => {
//     console.log('a')
// }).then(data => {
//     console.log(data);
//     return displayUser();
// }).then(data => {
//     console.log(data);
// })
// getUsers(() => {
//     displayUser(() => {
//         showMessage();
//     })
// });


// Giải pháp: chuyển từ dạng nested callback --> chaining

/**
 * Promise: Object đặc biệt dùng để xử lý các tác vụ bất động bộ
 *
 * Promise có 3 trạng thái
 * - pending
 * - fulfilled
 * - reject
 */



// const myPromise = new Promise((resolve, reject) => {
//resolve: Hàm để trả về dữ liệu thành công
//reject: Hàm để trả về dữ liệu thất bại
// Lưu ý: Việc tác vụ đó thành công hay không là do logic nghiệp vụ, còn promise chỉ cóc tác dụng là trả về
//     setTimeout(() => {
//         reject("reject");
//         resolve("User data")
//     }, 1000);
// });


/// Đọc dữ liệu của promise
// Then hoặc catch sau dó đến finally
// myPromise.then(data => {
//     console.log(data);
// }).catch(data => {
//     console.log('error');
// }).finally(data => {
//     console.log('Xong rồi');
// })

// class Promise2 {
//     constructor(resolve, reject) { }
// }
// then()
// }


// const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos', {
//     mode: "cors"
// });


// todoPromise.then(response => response.json())
//     .then(json => console.log(json))
const users = [
    {
        id: 1,
        name: "User 1",
        salary: 5000
    }, {
        id: 2,
        name: "User 2",
        salary: 6000
    }, {
        id: 3,
        name: "User 3",
        salary: 7000
    }, {
        id: 4,
        name: "User 4",
        salary: 8000
    }, {
        id: 5,
        name: "User 5",
        salary: 9000
    },
];

function getUsers(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users.find(({ id: userId }) => userId === id));
        }, 1000)
    })
}

const arr = [1, 3, 5];
// let total = new Promise(resolve => {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         getUsers(arr[i]).then(res => {
//             total += res.salary;
//             if (i === arr.length - 1) {
//                 return resolve(total)
//             }
//         })
//     }
// })

// total.then(data => {
//     console.log(data);
// })

// const getSalary = () => {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const isLast = (i === arr.length - 1);
//         const userPromise = getUsers(arr[i]).then(({ salary }) => {
//             total += salary;
//             if (isLast) {
//                 // Tạo promise để chứa tổng tiền
//                 return new Promise(resolve => resolve(total));
//             }
//         })

//         if (isLast) {
//             return userPromise;
//         }
//     }
// }

// getSalary().then((total) => {
//     console.log(total);
// })

// var promises = Promise.all(arr.map(id => getUsers(id)))

// var total = promises.then(users => users.reduce((prev, { salary }) => prev += salary, 0))
// total.then(data => console.log(data))


const a = 10;
// const aPromise = Promise.resolve(a);
const getA = () => {
    return Promise.resolve(a);
}

getA().then(data => {
    console.log(data);
})