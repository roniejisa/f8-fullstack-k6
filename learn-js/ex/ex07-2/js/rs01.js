// Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.

// Lưu ý rằng 1 không phải là số nguyên tố.

// Ví dụ: 2, 3, 5, 7, 11, và 13 đều là số nguyên tố.

// Ví dụ, 101 và 12321 là số đối xứng.

// var n = 10;
// var i = 0;
// var flag = false;
function result(n) {
    var i = n;
    if (+n <= 1) {
        console.log(`${n} Không phải số nguyên tố`);
    } else {
        while (true) {
            var flag = false;
            if (isSymmetrical(i)) {
                for (var a = 2; a < i; a++) {
                    if (i % a === 0) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    return i;
                }
            }
            i++;
        }
    }
}

function isSymmetrical(n) {
    flag = false;
    var stringNumber = (+n).toString();
    var lengthNumber = stringNumber.length;
    if (lengthNumber % 2 === 0) {
        var middle = lengthNumber / 2;
        var firstStringNumber = stringNumber.slice(0, middle);
        var lastStringNumber = stringNumber.slice(middle);
    } else {
        var middle = Math.ceil(lengthNumber / 2);
        var firstStringNumber = stringNumber.slice(0, middle - 1);
        var lastStringNumber = stringNumber.slice(middle).split('').reverse().join('');
    }
    return firstStringNumber === lastStringNumber;
}
console.log(result(9999999));