
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    bucket = [];
    bucket.push([k, v]);
    this._storage[index] = bucket;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  var bucket = this._storage[index];
  if (!bucket) {
    result = undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        result = bucket[i][1];
      }
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
The hash table itself is O(1), because we can add, retrieve, and remove tuples by using indeces. However, it is possible that some buckets are O(n), if by some chance the hash function creates equal indeces for many inputs.
 */

