// var user = {
//     name: "Minh Hiếu",
//     email: "roniejisa@gmail.com",
//     age: 31,
// }

// Object.keys() --> Lấy danh sách các key trả về mảng (--> Không lấy prototype)

// var keys = Object.keys(user);
// console.log(keys);

// if(Object.keys(user).length) {
//     Object.keys(user).forEach(function (key){
//         console.log(user[key]);
//     })
// }else{
//     console.log("Không có dữ liệu");
// }

// console.dir(Object)

// Object.values() --> Lấy danh sách các value trả về mảng
// console.log(Object.values(user));

//Object.entries() --> Trả về cả keys và values --> Mảng 2 chiều
// console.log(Object.entries(user));

// Object.assign(target, source1, source2,...)
// - Trả về object mới sau khi nối
// - Thay đổi object target
// var a = {
//     course: "Fullstack",
//     teacher: "Minh Hiếu"
// };

// var b = {a: "1", b: "2"};
// var obj = Object.assign(user, a,b);
// console.log(obj);
// var obj = Object.assign({}, user, a);
// console.log(obj);
// console.log(user);


// Bài tập

var query = {
    status: true,
    category: 1,
    keyword: "Minh Hiếu"
}

// Chuyển object trên thành query string

// --> status=true&category=1&keyword=Hoàng+An
var queryString = Object.entries(query).map(function (item) {
    return `${item[0]}=${typeof item[1] === 'string' ? item[1].replaceAll(' ', '+') : item[1]}`;
}).join('&');

var query = Object.fromEntries(queryString.replaceAll('+', ' ').split('&').map(function (item) {
    item = item.split('=');
    if (['true','false'].indexOf(item[1]) !== -1) {
        item[1] = Boolean(item[1])
    }else if (!isNaN(item[1])) {
        item[1] = +item[1];
    }
    return item;
}))
console.log(query);