/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary search tree and a target integer, check if the tree contains a target.

Examples:
• Given a binary search tree:
                  8
                /   \
               3     10
              / \      \
             1   6      14
                       /
                     13
• For target: 4 // returns False
• For target: 14 // returns True

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟦 Python
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def search_bst(root: TreeNode, target: int) -> bool:
    # Write your code here.
    pass

# Test Cases
tree = TreeNode(8, TreeNode(3, TreeNode(1), TreeNode(6)), TreeNode(10, None, TreeNode(14, TreeNode(13))))
print(search_bst(None, 1), False)
print(search_bst(tree, 1), True)
print(search_bst(tree, 14), True)
print(search_bst(tree, 2), False)
print(search_bst(tree, 13), True)

# Given tree:
#                   8
#                 /   \
#                3     10
#               / \      \
#              1   6      14
#                        /
#                      13

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
🟨 Javascript
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function searchBST(root, target) {
    // Write your code here.
    return false
}

// Test Cases
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(searchBST(null, 1)) // false
console.log(searchBST(tree, 1)) // true
console.log(searchBST(tree, 14)) // true
console.log(searchBST(tree, 2)) // false
console.log(searchBST(tree, 13)) // true
console.log(searchBST(new TreeNode(), 0)) // true

// Given tree:
//                   8
//                 /   \
//                3     10
//               / \      \
//              1   6      14
//                        /
//                      13


*PLAN*
We must traverse down the tree and navigate down the path that we want
We can do this recursively or iteratively
Iteratively we should initiate a stack that we set to [root]
While stack length > 0 we will pop the stack 
    If node.value === target 
        return true
    If node.value is greater 
        than we will push node.right if exists
    else 
        we will push node.left if exists
        // This will ensure we are traversing down the correct path 
    If our stack.length reaches zero we have reached the end of branch and null 
we return false because we have not found the element 


*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function searchBST(root, target) {
    if(!root) return false 
    let stack = [root]
    
    while(stack.length > 0){
        let node = stack.pop()
        if(node.value === target) return true
        if(target > node.value && node.right){
            stack.push(node.right)
        }
        if(target < node.value && node.left){
            stack.push(node.left)
        }
    }
    return false
}

function searchBSTRecursive(root, target){
    // base case
    if(!root){
        return false
    }
    if(target === root.value) return true
    if(target > root.value){
        return searchBSTRecursive(root.right, target)
    }
    return searchBSTRecursive(root.left, target)
}

// Test Cases
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(searchBST(null, 1)) // false
console.log(searchBST(tree, 1)) // true
console.log(searchBST(tree, 14)) // true
console.log(searchBST(tree, 2)) // false
console.log(searchBST(tree, 13)) // true
console.log(searchBST(new TreeNode(), 0)) // true

// Test Cases Recursive
let treeR = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(searchBSTRecursive(null, 1)) // false
console.log(searchBSTRecursive(treeR, 1)) // true
console.log(searchBSTRecursive(treeR, 14)) // true
console.log(searchBSTRecursive(treeR, 2)) // false
console.log(searchBSTRecursive(treeR, 13)) // true
console.log(searchBSTRecursive(new TreeNode(), 0)) // true