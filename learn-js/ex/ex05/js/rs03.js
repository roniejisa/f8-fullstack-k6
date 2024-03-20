var arr = [1, 12, 'a', 1, 1, 1, 11, 2, 3, 3, 4, 5, 6, 7, 7];
var newArray = [];

for (var i = 0; i < arr.length; i++) {
    var flag = true;
    for (var j = 0; j < newArray.length; j++) {
        if (arr[i] === newArray[j]) {
            flag = false;
        }
    }
    if (flag || newArray.length === 0) {
        newArray[newArray.length] = arr[i];
    }
}

console.log(newArray)