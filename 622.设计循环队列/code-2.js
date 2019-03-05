var MyCircularQueue = function (k) {
  this.queue = Array(k)     // 默认生成了长度为 k 的空数组
  this.front = 0  // 头指针
  this.rear = 0   // 尾指针
  this.size = k
};

// 向队尾插入一个元素
MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    this.queue[this.rear] = value
    // 移动指针，超出队尾长度，则循环回到队首
    this.rear = (this.rear + 1) % this.size
    return true
  } else {
    return false
  }
};

// 在队首删除一个元素
MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    // 将删除的位置赋值为 undefined
    // 如果设为空字符串 ""，而 "" 不等于 undefined，所以这个位置以后会输出 0
    this.queue[this.front] = undefined
    this.front = (this.front + 1) % this.size
    return true
  } else {
    return false
  }
};

// 获取队首元素的值
MyCircularQueue.prototype.Front = function () {
  let value = this.queue[this.front]
  // 没有查询到只能判断不等于 undefined，因为元素 0 有效
  return value !== undefined ? value : -1
};

// 获取队尾元素的值
MyCircularQueue.prototype.Rear = function () {
  // 尾指针总是指向第一个空元素，如果队列已满，那么则指向开头第一个位置
  let rear = this.rear - 1
  let value = this.queue[rear < 0 ? this.size - 1 : rear]
  // 没有查询到只能判断不等于 undefined，因为元素 0 有效
  return value !== undefined ? value : -1
};

// 队列是否为空
MyCircularQueue.prototype.isEmpty = function () {
  // 队列为空时，首位指针位置相同，且指向元素为空
  return this.rear === this.front && !this.queue[this.front]
};

// 队列是否全满
MyCircularQueue.prototype.isFull = function () {
  // 队列为满时，首位指针位置相同，且指向元素不为空
  // 由于 deQueue 方法中将删除的的元素设为 undefined，这里必须强制转成 boolean，否则会直接输出空元素的值，即 undefined 
  return this.rear === this.front && !!this.queue[this.front]
};