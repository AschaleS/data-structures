var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};
var storage = {};

stackMethods.push = function(val) {
  storage[this.counter] = val;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  return storage[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};


