Array.prototype.push2 = function (data) {
    this[this.length] = data;
    return this.length;
}

var a = [];
a.push2(2);
a.push2(3);
a.push2(42);
a.push(42);
a.push(42);
a.push(42);