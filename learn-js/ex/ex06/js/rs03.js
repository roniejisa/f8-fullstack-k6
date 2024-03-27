var arr = [1, 2, 3, true, false, function () { }, ["a", 1, true], ["b", 2, false]]

var newArray = arr.reduce(function (newArray, prev) {
    if (Array.isArray(prev)) {
        for (var j = 0; j < prev.length; j++) {
            var value = prev[j];
            if (newArray.length === 0) {
                var newArrayType = []
                newArrayType.push(value);
                newArray.push(newArrayType);
            } else {
                newArray = checkTypeOfAddArray(newArray, value);
            }
        }
    } else {
        newArray = checkTypeOfAddArray(newArray, prev);
    }
    return newArray;
}, [])

function checkTypeOfAddArray(newArray, data) {
    var index = newArray.findIndex(function (arr) {
        return arr.some(function (item) {
            return typeof item === typeof data;
        });
    });
    if (index != -1) {
        newArray[index].push(data)
    } else {
        var newArrayType = [];
        newArrayType.push(data);
        newArray.push(newArrayType);
    }
    return newArray
}
console.log(newArray);