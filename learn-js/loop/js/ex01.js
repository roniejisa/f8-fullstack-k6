// Vòng lặp
// for (var i = 1; i <= 10; i += 2) {
//     console.log(`Lần lặp ${i}`);
// }

// for (var i = 10; i >= 1; i -= 2) {
//     console.log(`Lần lặp ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         console.log(`Lần  lặp thứ ${i} - ${j}`);
//     }
// }


// $ = 1 + 2 + 3 + 4 + ... + N
// var n = prompt('N= ');
// var total = 0;
// for (i = 1; i <= n; i++) {
//     total += i;
// }
// console.log(total);

// $ = 1 + 1*2 + 1*2+3 + 1*2*3*4;

var n = 5;
var total = 0;
var number = 1;
for (var i = 1; i <= n; i++) {
    number *= i;
    total += number;
}
console.log(total);