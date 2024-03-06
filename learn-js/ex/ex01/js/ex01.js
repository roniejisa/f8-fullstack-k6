// Bài 1

var a = 4;
var b = 5;
console.log("Bài 1");
console.log("a = " + a + " và b = " + b);
a = a + b;
b = a - b;
a = a - b;
console.log("Kết quả: a = " + a + " b = " + b);

// Bài 2
// S = 10 + 20 + 5^10 / 2

var total = 10 + 20 + 5 ** 10 / 2
console.log("Bài 2");
console.log("Tổng bằng: 10 + 20 + 5 ** 10 / 2 = " + total);

//Bài 3
var a = 7;
var b = 10;
var c = 6;
let max;
console.log("Bài 3");
console.log(`Cho a = ${a}, b = ${b}, c=${c}`)

if (a > b) {
    max = a;
} else {
    max = b;
}
if (c > max) {
    max = c;
}

console.log("Số lớn nhất là " + max)

// Bài 4
console.log("Bài 4");
var a = 1;
var b = 2;
if (a > 0 && b > 0) {
    console.log("Hai số cùng dấu")
} else {
    console.log("Hai số khác dấu")
}

// Bài 5:
var a = 6;
var b = 4;
var c = 5;
var temp;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}
console.log(a, b, c);