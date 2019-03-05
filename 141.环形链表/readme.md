[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

> 给定一个链表，判断链表中是否有环。
>
> 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

算法原理：

使用快慢指针法，遍历快指针和慢指针，如果遇到快指针和慢指针相遇，或是快指针跑到了慢指针的后面，说明链表闭环，返回 true。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
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
```
