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