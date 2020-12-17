class Stack {

  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(val) {
    this.storage[this.counter] = val;
    this.counter++;
  }

  pop() {
    if (this.counter > 0) {
      this.counter--;
    }
    return this.storage[this.counter];
  }

  size() {
    return this.counter;
  }
}

var stack = new Stack();
