// https://leetcode.com/problems/binary-tree-preorder-traversal

var preorderTraversal = function(root) {
    let stack = [root]
    let output = []
    if(!root) return []
    while(stack.length > 0){
        let node = stack.pop()
        output.push(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return output
};


/*
Solution python
def preorderTraversal(root: Optional[TreeNode]) -> List[int]:
if not root:
    return []
res = []
stack = [root]
while stack:
    node = stack.pop()
    if node.right:
        stack.append(node.right)
    if node.left:
        stack.append(node.left)
    res.append(node.val)
return res
*/