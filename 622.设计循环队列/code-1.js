var MyCircularQueue = function (k) {
  this.queue = []
  this.size = k
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    this.queue.push(value)
    return true
  } else {
    return false
  }
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.shift() !== undefined) {
    return true
  } else {
    return false
  }
};

MyCircularQueue.prototype.Front = function () {
  let front = this.queue.shift()
  if (front !== undefined) {
    // 如果弹出的值是有效的，那么还得放回去
    this.queue.unshift(front)
    return front
  } else {
    return -1
  }
};

MyCircularQueue.prototype.Rear = function () {
  let rear = this.queue.pop()
  if (rear !== undefined) {
    // 如果弹出的值是有效的，那么还得放回去
    this.queue.push(rear)
    return rear
  } else {
    return -1
  }
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0
};

MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.size
};