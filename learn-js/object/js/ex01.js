// /**
//  * Đối tượng
//  * 
//  * - Thuộc tính ( Biến )
//  * - Phương thức ( Hàm )
//  * 
//  * Các cách tạo đối tượng trong JS
//  * 
//  * Object Literal (Object cụ tổ)
//  * Function Constructor
//  * 
//  * 
//  * Cú pháp chung
//  * key: value
//  * --> key thường là 1 chuỗi
//  * 
//  */

// // console.dir(Object)


// var user = {
//     name: "Hiếu",
//     email: "roniejisa@gmail.com",
//     age: 32,
//     getName: function () {
//         return "Minh Hiếu"
//     }
// };
// // console.log(user);

// // var user = [];
// // console.log(user);

// // var user = new Object(1,2,3);


// // console.log(user);
// //getName là phương thức
// //name, email: thuộc tính

// console.log(user.email);
// console.log(user.name);
// console.log(user.getName());
// // console.log(user['age']);

// //Thêm key mới vào object
// user.address = "Hà Nội";
// console.log(user);

// //Cập nhật giá trị của key
// user.age = 33;
// console.log(user);

// //Xóa key
// delete user.age;

// console.log(user);

// //Duyệt các key của object
// for (var key in user) {
//     console.log(key, user[key]); //Computed Property



// }


// // Bài tập
// var a = {
//     name: "Minh Hiếu",
//     email: "roniejsia@gmail.com"
// }

// var b = {
//     course: "Fullstack",
//     teacher: "Hoàng An F8"
// }

// // Nối 2 object a và b => Lưu vào object c

// var c = {};

// for (var key in a) {
//     c[key] = a[key];
// }

// for (var key in b) {
//     c[key] = b[key];
// }

// console.log(c);

// //Kiểm tra 1 biến có phải object không?

// if (typeof user === "object" && !Array.isArray(user) && user !== null) {
//     console.log("Là object");
// }

var products = [
    null,
    1,
    false,
    {
        name: "SP1",
        price: 20000
    },
    [30000],
    {
        name: "SP2",
        price: 15000
    },
    undefined,
    {
        name: "SP 3",
        price: 35000
    }
]

// Trả về thông tin sản phẩm có giá lớn nhất

var product = products.reduce(function(initial, item){
    if(isObject(item)){
        if(!initial || !initial.price){
            initial = item;
        }
        if(item && initial && item.price && initial.price && item.price > initial.price){
            initial = item;
        }
    }
    return initial; // Giá trị max tìm được
},undefined)

function isObject(data){
    return typeof data && !Array.isArray(data) && data !== null;
}

// console.log(product);
/**
 * Ý tưởng: 
 * Tìm được các phần tử là object và có thuộc tính price (Là sản phẩm)
 * 
 * Đặt lính canh là sản phẩm đầu tiên tìm được
 * So sánh giá của lính canh với các sản phẩm còn lại
 * Nếu giá của lính canh < giá sản phẩm --> Gán lính canh = sản phẩm 
 */