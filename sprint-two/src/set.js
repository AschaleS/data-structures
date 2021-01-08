var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?

 Both the add and remove methods are O(1) (constant) because they do not need to iterate over the set of values

 The contains method is O(n) because it has to iterate over each item in the object to determine if the item exists in the specific object.
 */