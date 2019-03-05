var hasCycle = function (head) {
  // 慢指针默认指向第一个节点
  let slow = head
  // 快指针默认指向第二个节点（如果是空链表，head 为 null，没有 next 属性）
  let fast = head ? head.next : null
  while (true) {
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      fast = fast.next.next
      slow = slow.next
    }
  }
};

export default hasCycle
