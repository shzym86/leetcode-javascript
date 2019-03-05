[164. 最大间距](https://leetcode-cn.com/problems/maximum-gap/)

> 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。如果数组元素个数小于 2，则返回 0。

算法原理：

使用冒泡排序，每一轮遍历之后计算最近两个已完成排序的元素的差值。

注：如果使用 `Array.prototype.sort()` 先来排序数组，后面还需要再遍历一次排序好的数组来计算最大差值，而此过程在排序阶段就可以记录。因此，这种方法性能不是最优。

```js
var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  let max = 0
  let len = nums.length - 1
  // 修改的冒泡排序（遍历到第一个元素为止，相当于自己和自己交换一次）
  for (let i = len; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    // 将最近确定顺序的两个元素的差值记录
    if (i < len) {
      if (nums[i + 1] - nums[i] > max) {
        max = nums[i + 1] - nums[i]
      }
    }
  }
  return max
};
```