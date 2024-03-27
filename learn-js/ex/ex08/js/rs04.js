Array.prototype.reduce2 = function (cb, initialValue = null) {
    var data = this;
    if (initialValue == null) {
        initialValue = data[0];
        data = data.slice(1);
    }

    for (var i = 0; i < data.length; i++) {
        initialValue = cb(initialValue, data[i], i);
    }
    return initialValue;
}