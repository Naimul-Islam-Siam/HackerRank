function getSecondLargest(nums) {
    // Complete the function
    let sortedNums = nums.sort(function (x, y) { return y - x; }); //descending order

    let max, secondMax;
    max = sortedNums[0];
    sortedNums.shift();

    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums.length !== 0) {
            if (sortedNums[0] !== max) {
                secondMax = sortedNums[0];
                break;
            }
            else if (sortedNums[0] === max) sortedNums.shift();
        }
        secondMax = null; //when array is empty, incase all the elements are of same value
    }

    return secondMax;
}