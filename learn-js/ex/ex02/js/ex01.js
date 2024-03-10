var km = prompt('km bằng:');
var kmOld = km;
var price = 15000;
var sale = 0;
var total = 0;
if (km >= 1) {
    total += price;
    km -= 1;
}

if (km >= 1) {
    price = 13500
    if (km >= 4) {
        total += 4 * price;
        km -= 4;
    } else {
        total += km * price;
        km = 0;
    }
}

if (km >= 1) {
    price = 11000;
    total += km * price;
}

if (kmOld > 120) {
    sale = 10;
}

var saleTotal = total * sale / 100;
total -= saleTotal;
document.write(`Số tiền đi ${kmOld} là ${total}`);