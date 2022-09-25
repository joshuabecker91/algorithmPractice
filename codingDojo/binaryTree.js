class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...
    // create BTNode for appropriate place in tree
    add(val) {
        // root
        if (!this.root) {
            // if there is not root for BST
            this.root = new BTNode(val); // assign root as new node w/ val as arg
            return this;
        }
        let runner = this.root; // create runner or cursor
        while (runner !== null) {
            // wwatch lecture for proper explanation of this while loop
            if (runner.val > val) {
                if (runner.left === null) {
                    runner.left = new BTNode(val); // assign node to runner.left
                    return this;
                } else {
                    runner = runner.left;
                }
            } else {
                if (runner.right === null) {
                    runner.right = new BTNode(val); // assign node to runner.left
                    return this;
                } else {
                    runner = runner.right;
                }
            }
        }
    }

    size(current_node) {
        if (current_node === null) {
            return 0;
        } else {
            return 1 + this.size(current_node.left) + this.size(current_node.right);
        }
    }
}

let bst1 = new BST();
bst1.add(45).add(40).add(35).add(30).add(50).add(60).add(10);
console.log(bst1);
console.log(bst1.size(bst1.root));

console.log(bst1.root.right.right); // access nested nodes
