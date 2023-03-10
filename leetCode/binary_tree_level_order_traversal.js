// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/


var levelOrder = function(root) {
    let output = []
    
    if(!root) return []
    let queue = [root]
    let nextLevel = []
    let currentLevel = []

    while(queue.length > 0){
        let node = queue.shift()
        currentLevel.push(node.val)
        if(node.left){
            nextLevel.push(node.left)
        }
        if(node.right){
            nextLevel.push(node.right)
        }
        if(queue.length === 0) {
            output.push(currentLevel)
            currentLevel = []
            queue = nextLevel
            nextLevel = []
        }
    }
    return output
};