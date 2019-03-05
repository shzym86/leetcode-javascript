import hasCycle from './code'

// 声明链表节点类
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表类
class LinkedList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let node = head
    arr.forEach(item => {
      node.next = new Node(item)
      node = node.next
    });
    return head
  }
}

test("hasCycle:1", () => {
  // 创建单链表
  let head = new LinkedList([1, 2, 3, 4, 5])
  // 形成闭环
  head.next.next.next.next.next = head.next
  // 测试
  expect(hasCycle(head)).toBe(true)
})

test("hasCycle:2", () => {
  // 创建单链表
  let head = new LinkedList([1, 2, 3, 4, 5])
  // 测试
  expect(hasCycle(head)).toBe(false)
})