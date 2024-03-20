var arr = [1, 'a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var count = 0;

function isPrime(number) {
    if (isNaN(number) || +number < 2) {
        return false;
    }
    if (+number == 2 || +number == 3) {
        return true;
    }
    var initialValue = 3
    var flag = true;
    while (initialValue < +number) {
        if (+number % initialValue === 0) {
            flag = false;
            break;
        }
        initialValue++;
    }
    return flag;
}

var total = 0;
for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        total += arr[i];
        count++;
    }
}

if (count === 0) {
    console.log("Không có số nguyên tố!")
} else {
    console.log(total / count);
}