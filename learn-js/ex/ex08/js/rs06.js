var a = [1, true, true, false, 5];






Array.prototype.filter2 = function (cb) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            newArray[newArray.length] = this[i];
        }
    }
    return newArray;
}