n = 10;
total = 0;
let i = n;
a = 0;
/**
 * n = 10
 * 1: n = 1*2
 * i = 10
 * a=n-(i - 1)
 * b=n-(i - 2)
 * 2: n = 2 * 3;
 * i = 9
 * a = 10-(9-1)
 * b = 10-(9-2)
 */

while (i > 0) {
    var a = n - (i - 1);
    var b = n - (i - 2);
    console.log(a,b);
    total += a * b;
    i--;
}

document.write(`n = ${n} thì S=${total}`)