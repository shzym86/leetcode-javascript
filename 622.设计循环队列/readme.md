[622. 设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/)

> 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
> 
> 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
> 
> 你的实现应该支持如下操作：
> 
> - MyCircularQueue(k): 构造器，设置队列长度为 k 。
> - Front: 从队首获取元素。如果队列为空，返回 -1 。
> - Rear: 获取队尾元素。如果队列为空，返回 -1 。
> - enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
> - deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
> - isEmpty(): 检查循环队列是否为空。
> - isFull(): 检查循环队列是否已满。

【解法一】直接使用数组API进行两端的增减操作，比较容易理解。但是这种方法构造的队列是弹性的，并没有固定长度，只是限制了最大长度为 k。

```js
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
```

> 注：如果数组为空，那么尝试获取数组两端的数组得到的值是 undefined

【解法二】不使用数组API，而使用队列指针，可以体会到队列循环的感觉。

- 插入元素，向后一位移动尾指针，超出长度则循环到前面
- 删除元素，向后一位移动头指针，超出长度则循环到前面
- 尾指针总是指向第一个空元素的位置（全满状态除外）
- 头指针总是指向第一个非空元素的位置（全空状态除外）

```js
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
```

> 注：判断一个位置的元素是不是为空/有值，以判断其值是否等于 undefined 来界定。