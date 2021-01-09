var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethod);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryMethod = {};

binaryMethod.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binaryMethod.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  if (target > this.value && this.right) {
    return this.right.contains(target);
  }
  if (target < this.value && this.left) {
    return this.left.contains(target);
  }
  return false;
};

binaryMethod.depthFirstLog = function(callback) {
  if (this.value) {
    callback(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?

 For the insert method and contains method, the time complexity is O(log n), because we can divide the tree in half with each iteration without having to check each individual node.

 For the depthFirstLog, the time complexity is O(n), because we have to call a function on each node, so the more nodes we have, the more time we spend calling the function on them.

 */