

var price = 1.678;
var kwh = 100;
var total = 0;
var totalkwh = kwh;
var level1 = 50;
if (kwh >= level1) {
    if (kwh > level1) {
        kwh -= level1;
        total += level1 * price;
    } else {
        total += kwh * price;
        kwh = 0;
    }
}

var level2 = (100 - 51 + 1);
if (kwh >= level2) {
    price = 1.734;
    if (kwh > level2) {
        kwh -= level2;
        total += level2 * price;
    } else {
        total += kwh * price;
        kwh = 0;
    }
}

var level3 = (200 - 101 + 1)
if (kwh >= level3) {
    price = 2.014;

    if (kwh > level3) {
        kwh -= level3;
        total += level3 * price;
    } else {
        total += kwh * price;
        kwh = 0;
    }
}

var level4 = (300 - 201 + 1);
if (kwh >= level4) {
    price = 2.536;

    if (kwh > level4) {
        kwh -= level4;
        total += level4 * price;
    } else {
        total += kwh * price;
        kwh = 0;
    }
}

var level5 = (400 - 301 + 1);
if (kwh >= level5) {

    price = 2.834;
    if (kwh > level5) {
        kwh -= level5;
        total += level5 * price;
    } else {
        total += kwh * price;
        kwh = 0;
    }
}

if (kwh >= 1) {
    price = 2.927;
    total += kwh * price;
    kwh = 0;
}

document.write(`Số tiền phải đóng ${totalkwh} kWh là ${total}`)