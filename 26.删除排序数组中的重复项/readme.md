26. [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

- 算法原理：首先对数组进行排序使得重复的元素全部相邻。使用快慢指针法，如果后一个元素与前一个元素相同，则慢指针不动。如果不相同，则用快指针的值覆盖慢指针的值。

```js
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i + 1
};
```