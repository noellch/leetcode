/* 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

/* ------------------------------------------------------------------------------- */

// function removeDuplicates(nums: number[]): number {
//     let l = 0,
//         r = 0;

//     while (r < nums.length) {
//         let count = 1;
//         while (r < nums.length && nums[r] === nums[r + 1]) {
//             r++;
//             count++;
//         }

//         for (let i = 0; i < Math.min(2, count); i++) {
//             nums[l] = nums[r];
//             l++;
//         }
//         r++;
//     }

//     return l;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function removeDuplicates(nums: number[]): number {
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 1, 2, 2, 3];
// const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log(removeDuplicates(nums));
