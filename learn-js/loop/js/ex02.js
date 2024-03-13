// var i = 0;

// while(i < 10){
//     i++;
//     console.log(`i = ${i}`)
// }

// Kiểm tra số nguyên tố
/**
 * 
 * Chia hết cho 1 và chính nó
 * 
 */

// var i = 1;
// do {
//     console.log(`i = ${i}`);
//     i++;
// } while (i <= 10);

// var n = 7;
// var flag = true;
// var i = 2;
// if (n <= 1 || n % 1 !== 0) {
//     flag = false;
// } else {
//     while (i < n) {
//         if (n % i === 0) {
//             flag = false;
//             break;
//         }
//         i++;
//     }
// }
// console.log(flag);

for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(`i = ${i}`);
}