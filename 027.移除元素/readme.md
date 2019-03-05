27. [移除元素](https://leetcode-cn.com/problems/remove-element/)

> 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

- 算法原理：如果遍历到需要删除的值，那么保持慢指针不动。快指针每次递增，且每轮遍历都用快指针的值覆盖慢指针的值。实际上，原地移除元素相当于用后一个不需要移除的元素将其覆盖。

```js
var removeElement = function (nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i  // 返回修改后数组的长度
};
```