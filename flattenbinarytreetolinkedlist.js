//Objective is to flatten a binary tree into a linked list with left and right pointers

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)


//O(n) solution that does a preorder search through the tree, puts all the nodes
//into an array, then iterates over the array and puts each node into a new linked list

let arr = []

function preorder(node) {
    if (!node) {
        return
    }
    arr.push(node)
    preorder(node.left)
    preorder(node.right)
}

preorder(tree.root)

let newNode = new Node(null, null, -1)
let temp = newNode 

while (arr.length) {
    let next = arr.shift()
    temp.left = null 
    temp.right = next 
    temp = next
}

return newNode.right