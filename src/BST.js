class BstNode {
  /**
   * @memberof BstNode
   * @type {BstNode}
   */
  leftPointer = null;
  /**
   * @memberof BstNode
   * @type {BstNode}
   */
  rightPointer = null;
  /**
   * Creates an instance of BstNode.
   * @param {number} val
   * @memberof Node
   */
  constructor(val) {
    this.val = val;
  }
}

class BST {
  /**
   * @memberof BST
   * @type {BstNode}
   */
  root = null;
  /**
   * @param {BstNode['val']} val
   * @return {BST}
   * @memberof BST
   */
  addNode(val) {
    const newNode = new BstNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.val < newNode.val) {
        if (!temp.rightPointer) {
          temp.rightPointer = newNode;
          break;
        } else {
          temp = temp.rightPointer;
        }
      } else if (temp.val > newNode.val) {
        if (!temp.leftPointer) {
          temp.leftPointer = newNode;
          break;
        } else {
          temp = temp.leftPointer;
        }
      }
    }

    return this;
  }
  /**
   * @return {BST}
   * @memberof BST
   */
  inspect() {
    console.log(JSON.stringify(bst, null, 2));
    return this;
  }
}

const bst = new BST();

bst
  .addNode(47)
  .addNode(21)
  .addNode(76)
  .addNode(18)
  .addNode(52)
  .addNode(82)
  .inspect();


