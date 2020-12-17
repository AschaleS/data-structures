var Queue = function() {
  var someInstance = {};
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var temp = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.counter];
  return temp;
};

queueMethods.size = function() {
  return this.counter;
};


