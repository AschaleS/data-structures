var Queue = function() {
  var someInstance = {};

  var storage = {};
  var counter = 0;

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
    }
    var temp = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[counter];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
