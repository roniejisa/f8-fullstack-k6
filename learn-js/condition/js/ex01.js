/**
 * // Code 1
 * 
 * if(dieukien){
 * // Code
 * }else if(dieukien 1){
 * // Code 1
 * }else if(dieukien 2){
 * // Code 2
 * }else if(dieukien 3){
 * // Code 3
 * }else if(dieukien 4){
 *  //Code 4
 * }else{
 *  // Code 5
 * }
 * 
 * 
 * if(dieukien){
 *  if(dieukien){
 * 
 *  } else {
 * 
 *  }
 * }else{
 * 
 * }
 */

// var a = 10;
// if (a >= 10) {
//     console.log("Đúng");
// } else {
//     console.log("Sai");
// }

/**
 * Tính lương thực nhận của 1 nhân viên
 * 
 * Lương <= 5tr --> Không chịu thuế
 * Lương >= 5tr  và <= 15tr --> 3%
 * Lương trên 15tr --> 5%
 * 
 */

// var salary = 2000000000;
// var income = 0;
// if (salary > 15000000) {
//     income = 5;
// } else if (salary >= 5000000) {
//     income = 3;
// }

// let total = salary - ((salary * income) / 100);
// console.log(total.toLocaleString());



// var action = "edit";

// switch (action) {
//     case "create":
//         console.log("Thêm");
//         break;
//     case "edit":
//         console.log("Sửa");
//         break;
//     case 'delete':
//         console.log("Xóa");
//         break;
//     default:
//         console.log("Danh sách");
//         break;
// }


// if (action === "create" || action === "add" || action === "add") {
//     console.log("Thêm");
// } else if (action === "delete" || action === "remove" || action === "destroy") {
//     console.log("Xóa");
// } else if (action === "edit" || action === "update") {
//     console.log("Sửa");
// } else {
//     console.log("Danh sách");
// }

/**
 * Tính số ngày trong tháng
 31 ngày 1 ,3 ,5 ,7 , 8, 10 ,12
 28 hoặc 29: 2
 Yêu cầu Kiểm tra tháng theo diều kiện sau 
 Số nguyên
 Từ 1 đến 12
*/
var number = prompt("Nhập tháng");
var year = prompt("Nhập năm");
var day = 31;
if (number % 1 === 0 && number > 0) {
    switch (+number) {
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            day = 28;
            if (year % 4 === 0) {
                day = 29;
            }
            break;
    }
    console.log(`Tháng ${number} có ${day} ngày`)
} else {
    console.log('Tháng không hợp lệ');
}


