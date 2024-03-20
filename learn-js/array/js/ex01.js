/**
 * Mảng: Tập hợp nhiều giá trị trong 1 biến (Biến mảng)
 */

var users = ["User 1", "User 2", "User 3"];

//Thêm mới users 
users[users.length] = "F8";

//Duyệt mảng
// for(var index = 0; index < users.length; index++){
//     console.log(users[index]);
// }
// for in 
// for(const index in users){
//     console.log(users[index]);
// }

// for of: Lấy ra giá trị
// for(const user of users){
// console.log(user);
// }

var indexDel = 1;
var newArr = [];
for (var index in users) {
    if (+index !== +indexDel) {
        newArr[newArr.length] = users[index];
    }
}

//Thêm phần từ vào đầu mảng (Không dùng hảm)

var newElement = "User 0";
var arrayNew = new Array(newElement);

for (var value of users) {
    arrayNew[arrayNew.length] = value;
}
console.log(arrayNew);
