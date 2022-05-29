/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */

function plusOne(digits: number[]): number[] {
    // 表示應該 +1
    let carry = true

    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry) {
            carry = digits[i] + 1 >= 10 ? true : false
            // 取個位數
            digits[i] = (digits[i] + 1) % 10
            // 第一次的 1 已經加了，如果接下來不用進位的話就直接跳出迴圈。
        } else break
    }

    if (carry) digits.unshift(1)

    return digits
}

console.log(plusOne([1, 2, 3]))

/**
 * T.C.: O(n) (worst case)
 * S.C.: O(1)
 */
