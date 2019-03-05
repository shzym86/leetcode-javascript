[215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

> 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。输入: [3,2,1,5,6,4] 和 k = 2；输出: 5

算法原理：

使用冒泡排序，每轮遍历把最大的值交换到最右边，不用等全部排序完，只要遍历 k 轮就可以完成任务，第 k 轮交换到末尾的元素就是“第K个最大元素”。这样比直接使用 `sort()` 完整排序的性能更好。

```js
var findKthLargest = function (nums, k) {
  let len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
  return nums[len - k + 1]
};
```