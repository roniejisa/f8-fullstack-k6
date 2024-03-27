var price = 10000000;
var price2 = "1200000000";

Object.prototype.getCurrency = function (currency) {
    var number = +this;
    if (typeof number !== 'number' || Number.isNaN(number)) {
        return 'Giá trị không hợp lệ';
    }
    var result = number.toLocaleString() + ' ' + currency;
    return result;
}