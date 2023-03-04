

//https://leetcode.com/problems/binary-tree-paths/description/

var binaryTreePaths = function (root) {
    if (!root) return []
    let result = []
    function createPath(node, string = "") {
        // base case
        if (!node) {
            return string
        }
        if (node.left || node.right) {
            string += String(node.val) + "->"
        }
        if (!node.left && !node.right) {
            string += String(node.val)
            result.push(string)
        }
        createPath(node.left, string)
        createPath(node.right, string)

        return string
    }
    createPath(root)
    return result
};