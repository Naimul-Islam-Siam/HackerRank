'use strict';
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
    let newNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            newNums[i] = nums[i] * 3;
        }
        else newNums[i] = nums[i] * 2;
    }

    return newNums;
}