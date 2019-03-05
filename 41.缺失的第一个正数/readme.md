[41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)

【解法一】算法原理：

直接使用 `sort()` 排序，过滤负数，只留下正数。然后根据不同条件来判断：
- 不存在正数，或第一个数大于 1，缺失正数就是 1
- 第一位是 1，那么遍历以计算相邻两位的差值是不是等于 1 来寻找
- 遍历完所有也没找到，则其就是一个从1开始的、连续的（元素可能重复）正整数数组

```js
var firstMissingPositive = function (nums) {
  // 过滤负数
  nums = nums.filter(item => item > 0)
  // 完整排序，处理特殊情况
  if (nums.length > 0) {
    nums.sort((a, b) => a - b)
    // 如 [7, 8, 9]
    if (nums[0] !== 1) {
      return 1
    }
  } else {
    return 1
  }

  // 寻找中间缺失的正数，如 [1, 2, 4, 5]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1
    }
  }

  // 也可能是连续的正数，如 [1, 2, 2, 3, 4, 5]
  return nums.pop() + 1
}
```


【解法二】算法原理：

上述解法使用了完整的排序，实际上没必要，根据选择排序法的原理，每一轮遍历找到最小的值，因此只要比较相邻两轮遍历找到的最小值的差值是不是大于 1 即可，一旦找到程序就结束了，后面都不需要继续遍历，可以节省性能。

```js
var firstMissingPositive = function (nums) {
  nums = nums.filter(item => item > 0)
  if (nums.length === 0) return 1
  // 选择排序
  for (let i = 0; i < nums.length; i++) {
    let min = i
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        // 不断记录最小值的索引
        min = j
      }
    }
    // 每一轮排序过后，最小值交换到了第一个
    [nums[i], nums[min]] = [nums[min], nums[i]]
    if (nums[0] !== 1) {
      return 1
    }
    // 从第二轮开始，每次检查相邻的最小值差值
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1
      }
    }
  }
  // 排序完如果是连续的正数，答案是最大值 +1
  return nums.pop() + 1
}
```


【解法三】算法原理：

上述用到的变种的选择排序法，有嵌套的 `for` 循环，因此时间复杂度至少为 O(n^2)，若根据原题的要求，以下是一个满足线性复杂度的算法，但是性能不高。

```js
var firstMissingPositive = function (nums) {
  let len = nums.length
  if (len === 0) return 1
  // 无限循环遍历数组，直到找到答案退出
  let min = 1
  while (true) {
    for (let i = 0; i < len; i++) {
      // 指定缺失正数从 1 开始，遍历数组元素一个个去碰它，碰到了就 +1，然后从头遍历数组再去碰
      if (nums[i] === min) {
        min++
        break
      } else {
        // 遍历完都没有碰到指定的缺失正数，那么答案就是它
        if (i === len - 1) {
          return min
        }
      }
    }
  }
};
```