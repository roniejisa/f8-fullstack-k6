
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