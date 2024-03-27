// Cho một mảng số nguyên chưa được sắp xếp nums. Hãy trả về số nguyên dương nhỏ nhất không có trong nums.

var nums = [9,6,5,4,3,2,1,-1,-3];



function test(nums) {
    nums = nums.sort((a, b) => a - b);
    var minNumber = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && nums[i] === minNumber) {
            minNumber++;
        }
        if (nums.indexOf(minNumber) === -1) {
            break;
        }
    }
    return minNumber;
}
console.log(test(nums));