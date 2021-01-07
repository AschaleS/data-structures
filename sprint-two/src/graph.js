

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {value: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].to === this.storage[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.storage[fromNode]) {
    this.addNode(fromNode);
  }
  if (!this.storage[toNode]) {
    this.addNode(toNode);
  }

  if (fromNode.from === null || toNode.to === null) {
    this.storage[fromNode].from = this.storage[toNode];
    this.storage[toNode].from = this.storage[fromNode];
  }
  this.storage[fromNode].to = this.storage[toNode];
  this.storage[toNode].to = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (fromNode.from === toNode.to || toNode.from === fromNode.to) {
    this.storage[fromNode].from = null;
    this.storage[toNode].to = null;
  }
  this.storage[fromNode].to = null;
  this.storage[toNode].from = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode - O(1) because it does not need to iterate over anything. IT simply adds a property within the object.

 contains - O(n) because it has to iterate over each node in the object to determine if the argument exists in the object.

 removeNode - O(1) because the function does not have to iterate over the properties in the object. It can acccess the node by its key.

 hasEdge - O(1) because it only has to check two nodes based on their key, and does not need to look at any others.

 addEdge - O(1) because it only has to check two nodes and if they exist. It does not need to look at any others.

 removeEdge - O(1) because it only has to check two nodes and if they exist. It does not need to look at any others.

 forEachNode - O(n) because it has to look through every node in order to call the function with the current node.

 */


