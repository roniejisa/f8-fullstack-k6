var n;
while (true) {
    n = prompt("Nhập số nguyên lớn hơn 1");
    if (n == "") {
        continue;
    }
    n = +n;
    if (n >= 2) {
        break;
    }
}

var result = `${n} không phải số nguyên tố`;

function isSoNguyenTo(n) {
    var i = 2;
    var flag = false;
    if (n > 1) {
        flag = true
        if (n == 2) {
            flag = true
        } else {
            while (i < n) {
                if (n % i === 0) {
                    flag = false;
                    break;
                }
                i++;
            }
        }
    }
    return flag;

}
if (isSoNguyenTo(n)) {
    result = `${n} là số nguyên tố`;
}
document.write(result);