var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  return this.storage[this.counter];
};

Stack.prototype.size = function() {
  return this.counter;
};
