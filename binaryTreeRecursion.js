
// You are given an empty function with a tree node as an input. We are going to traverse the tree with recursion:

// Create an empty array, which will be used to store the values of the tree nodes.
// Create a helper function that takes in a node as a parameter.
// Within the helper function, add the value of the node to the array.
// If the node has a left child, call the helper function with the left child as the parameter. If the node has a right child, call the helper function with the right child as the parameter.
// In the main function, call the helper function with the root node of the tree as the parameter.
// Return the array.
// [execution time limit] 4 seconds (js)

// [input] tree.integer root

// [output] array.integer

// [JavaScript] Syntax Tips



//
// Binary trees are already defined with this interface:
class BTNode {
    constructor(value, left = null, right = null){
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  
  function binaryTree(root) {
    let array = []
    function helper(node){
      array.push(node.value)
      if(node.left){
        helper(node.left)
      }
      if(node.right){
        helper(node.right)
      }
    }
  
    helper(root)
    // console.log(array)
    return array
  }
  
  let LT = new BTNode(200)
  let RT = new BTNode(100)
  let BT = new BTNode(1, new BTNode(0, LT), new BTNode(9, RT))
  // console.log(binaryTree(BT) === [1, 0, 9] ) //[]
  
  console.log(binaryTree(BT)) //[]