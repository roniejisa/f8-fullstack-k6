/**
 * Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Bước 1: Sắp xếp mảng theo thứ tự tăng dần

Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */

var arr = [4, 1, 2, 5, 10];
var element = 0;
var temp = null;
function sortArray(arr) {
    for (var i = 0; i <= arr.length; i++) {
        for (var j = 0; j <= arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var arr = sortArray(arr);
function addIndexElement(index, element, array) {
    var temp = null;
    var tempOld = null;
    for (var i = 0; i <= array.length; i++) {
        if (temp) {
            tempOld = array[i];
            array[i] = temp;
            temp = tempOld;
        }

        if (index == i) {
            temp = array[i];
            array[i] = element;
        }
    }

    if (!array[index]) {
        array[index] = element;
    }
    return array;
}

var newArray = addIndexElement(0, element, arr);

console.log(newArray);