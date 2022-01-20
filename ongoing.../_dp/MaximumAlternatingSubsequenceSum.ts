/** The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

For example, the alternating sum of [4,2,5,3] is (4 + 5) - (2 + 3) = 4.
Given an array nums, return the maximum alternating sum of any subsequence of nums (after reindexing the elements of the subsequence).

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not. */

function maxAlternatingSum(nums: number[]): number {
    let sumOdd = 0,
        sumEven = 0

    for (let i = 0; i < nums.length; i++) {
        let temEven = Math.max(sumOdd + nums[i], sumEven)
        let temOdd = Math.max(sumEven - nums[i], sumOdd)
        console.log(temEven, temOdd)
        sumOdd = temOdd
        sumEven = temEven
    }

    return sumEven
}

const nums = [4, 2, 5, 3]

console.log(maxAlternatingSum(nums))

// function maxAlternatingSum(nums: number[]): number {
//     const dp: Map<string, number> = new Map()

//     function dfs(i: number, even: boolean): number {
//         if (i === nums.length) return 0
//         if (dp.has(`${i}- ${even}`)) return dp.get(`${i}- ${even}`) as number

//         let total = even ? nums[i] : -1 * nums[i]
//         // 每位數都有兩個選擇 - 包含它做計算或是捨棄
//         // 若包含進去做計算，就要判斷當下是奇位數還是偶位數
//         // 若是奇位數本身會是被減去的項目
//         // 若是偶位數則會是做為被加上的項目
//         // 若是被捨棄的選項，下一位則會維持跟被捨棄那位同樣的正負數
//         const max = Math.max(total + dfs(i + 1, !even), dfs(i + 1, even)) as number
//         console.log(total + dfs(i + 1, !even), dfs(i + 1, even))

//         dp.set(`${i}- ${even}`, max)
//         return max
//     }

//     return dfs(0, true)
// }

// const nums = [4, 2, 5, 3]

// console.log(maxAlternatingSum(nums))

/**
 *
 *                           .
 *              +4                     x
 *        -2          x           +2           x
 *    +5     x     -5   x      -5     x     +5     x
 *  -3  x +3  x  +3  x -3  x  +3  x -3  x -3  x +3  x
 *
 *    3                0          2          5
 *
 */
