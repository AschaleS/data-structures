var Stack = function() {
  var someInstance = {};
  someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  return this.storage[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};


