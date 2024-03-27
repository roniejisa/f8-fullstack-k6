
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var newArray = [];
function forNewArray(array) {
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            newArray.concat(forNewArray(array[i]))
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(forNewArray(arr))