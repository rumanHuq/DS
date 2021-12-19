class ListNode {
  /**
   * @memberof ListNode
   * @type {ListNode}
   */
  pointer = null;
  /**
   * @memberof ListNode
   * @type {number}
   */
  val;
  /**
   * Creates an instance of ListNode.
   * @param {number} val
   * @memberof ListNode
   */
  constructor(val) {
    this.val = val;
  }
}

class LinkedList {
  /**
   * Creates an instance of LinkedList.
   * @param {ListNode["val"]} value
   * @memberof LinkedList
   */
  constructor(value) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.len = 1;
  }
  /**
   * @param {number} val
   * @memberof LinkedList
   */
  push(val) {
    const newNode = new ListNode(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.len = 1;
    } else {
      this.tail.pointer = newNode;
      this.tail = newNode;
      this.len = this.len + 1;
    }
    return this;
  }
  pop() {
    if (!this.head) {
      return this;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.len = 0;
      return this;
    }

    let temp = this.head;
    let pre = this.head;
    while (temp.pointer) {
      pre = temp;
      temp = temp.pointer;
    }
    this.len--;
    this.tail = pre;
    this.tail.pointer = null;
    return this;
  }
  /**
   *
   *
   * @param {number} val
   * @memberof LinkedList
   */
  unshift(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.len = 1;
    } else {
      newNode.pointer = this.head;
      this.head = newNode;
      this.len++;
    }

    return this;
  }
  shift() {
    if (!this.head) return this;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.len = 0;
      return this;
    }
    this.head = this.head.pointer;
    this.len--;
    return this;
  }
  /**
   * @param {number} index
   * @return {ListNode}
   * @memberof LinkedList
   */
  getAtIndex(index) {
    if (index < 0 || index >= this.len) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.pointer;
    }
    return node;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {LinkedList}
   * @memberof LinkedList
   */
  setValueAtIndex(index, val) {
    if (index < 0 || index >= this.len) return this;
    const node = this.getAtIndex(index);
    if (!node) return this;
    node.val = val;
    return this;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {LinkedList}
   * @memberof LinkedList
   */
  insert(index, val) {
    if (index < 0 || index >= this.len) return this;
    if (index === 0) return this.unshift(val);
    if (index === this.len - 1) return this.push(val);

    const newNode = new ListNode(val);
    const node = this.getAtIndex(index - 1);
    newNode.pointer = node.pointer;
    node.pointer = newNode;
    this.len++;
    return this;
  }
  /**
   * @param {number} index
   * @return {LinkedList}
   * @memberof LinkedList
   */
  remove(index) {
    if (index < 0 || index >= this.len) return this;
    if (index === 0) return this.shift();
    if (index === this.len - 1) return this.pop();

    let removeableNode = this.getAtIndex(index);
    let prevNode = this.getAtIndex(index - 1);
    prevNode.pointer = removeableNode.pointer;
    removeableNode.pointer = null;
    this.len--;
    return this;
  }
  /**
   * @return {LinkedList}
   * @memberof LinkedList
   */
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let pointer = temp.pointer;

    for (let i = 0; i < this.len; i++) {
      pointer = temp.pointer;
      temp.pointer = prev;
      prev = temp;
      temp = pointer;
    }
    return this;
  }
  inspect() {
    const { head, tail, len } = this;
    console.log(JSON.stringify({ head, tail, len }, null, 2));
    return this;
  }
}

const ll = new LinkedList(1);
ll.push(2);
ll.push(3);

ll.setValueAtIndex(2, 2);
ll.reverse().inspect();
