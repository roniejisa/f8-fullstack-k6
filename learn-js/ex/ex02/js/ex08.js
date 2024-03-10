var n = 10;

function tinhBieuThuc(n, total = 1, i = 2) {
    total += 1 / i;
    if (i < n) {
        i++;
        total = tinhBieuThuc(n, total, i);
    }
    return total;
}

console.log(tinhBieuThuc(10));