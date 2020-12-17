var Queue = function() {
  var someInstance = {};
  someInstance.counter = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(val) {
  storage[this.counter] = val;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var temp = storage[0];
  delete storage[0];
  for (var key in storage) {
    storage[key - 1] = storage[key];
  }
  delete storage[this.counter];
  return temp;
};

queueMethods.size = function() {
  return this.counter;
};


