var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.counter;
};





