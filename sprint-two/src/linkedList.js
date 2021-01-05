var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head !== null) {
      var currentNode = new Node(value);
      list.tail.next = currentNode;
      list.tail = currentNode;
    } else if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== list.tail) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (list.tail.value !== target) {
      return false;
    } else {
      return true;
    }

  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //For the addToTail function, the time complexity is linear, because the function needs to go through all the nodes to determine the tail node and add a new node.

 For the removeHead function, the time complexity is constant, because no matter the length of the Linked List, the function only needs to access the head of the Linked List.

 For the contains function, the time complexity is linear, because the function needs the check the value of every element in the linked list in order to determine if the value exists within the Linked List.
 */
