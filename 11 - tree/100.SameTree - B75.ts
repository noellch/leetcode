/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true

    if (p && q) {
        if (p.val !== q.val) return false
        else return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    return false
}
