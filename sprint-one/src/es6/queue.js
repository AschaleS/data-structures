class Queue {

  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(val) {
    this.storage[this.counter] = val;
    this.counter++;
  }

  dequeue() {
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
  }

  size() {
    return this.counter;
  }
}

var queue = new Queue();