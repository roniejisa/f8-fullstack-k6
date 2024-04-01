/**
 * Javascript
 * Kiểu dữ liệu nguyên thủy (primitive type)
 * Kiểu dữ liệu tham chiếu (reference type)
 * 
 * Các ngôn ngữ khác
 * Pass by Value (Tham trị)
 * Pass by Reference (Tham chiếu)
 */

var a = ['Hoàng An', 32];


var b = a;

b[0] = "Hoàng An F8"

console.log(a);
console.log(b);

var a = 10; 
var b = a; // Sao chép địa chỉ của biến a gán biến b
// Cách sao chép array sang 1 địa chỉ (Sử dụng các phương thức để tạo ra mảng mới)
// 1. Shallow copy
// var b = a.slice(0);
// var b = [...a]; // Spread operator
// 2. Deep Copy
// Chuyển thành json --> Chuyển ngược lại
// var b = JSON.parse(JSON.stringify(a));


b = 20;
console.log(a);
console.log(b);

// Kiểu dữ liệu tham chiếu không so sánh được 
var a = [];
var b = [];
console.log(a === b);

var getA = function () {};
var getB = function () {};
console.log(getA === getB);
 