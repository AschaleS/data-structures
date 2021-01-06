var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node) {
  var currentNode = node || this;
  if (currentNode.value === target) {
    return true;
  }
  for (var i = 0; i < currentNode.children.length; i++) {
    if (this.contains(target, currentNode.children[i])) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity for the addChild method is O(1) (constant), because there is no need to iterate over the array.

 The time complexity for contains is O(n) (linear), because as the number of nodes to check increases, so does the time spent checking each node individually.
 */
