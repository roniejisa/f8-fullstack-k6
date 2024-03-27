// Lấy kết quả giao giữa 2 mảng

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var newArray = arrA.reduce(function (arr, prev) {
    if (arrB.includes(prev)) {
        arr.push(prev);
    }
    return arr;
}, [])

console.log(newArray);