// Cho hai mảng đã sắp xếp nums1 và nums2 có kích thước lần lượt là m và n, trả về trung vị của hai mảng đã sắp xếp đó.

var nums1 = [1, 2];
var nums2 = [9];

var array = nums1.concat(nums2);
if (array.length % 2 === 0) {
    var middle = array.length / 2;
    var trungVi = (array[middle - 1] + array[middle]) / 2;
} else {
    var trungVi = array[Math.ceil(array.length / 2)];
}

console.log(trungVi);