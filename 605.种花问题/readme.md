605. [种花问题](https://leetcode-cn.com/problems/can-place-flowers/)

> 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。给定一个花坛和一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

- 知识点：问题抽象、数学建模、动态输入
- 算法原理：将问题（花坛）抽象成一个只包含0和1的数组，其中0表示没种植花，1表示种植了花，遍历每一个元素，如果为0则判断两边是否都为0，如果符合则就是一个空地，这时候指针要向后多移动一位。注意边界情况要特殊对待。

```js
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    // 遍历的元素为0才有可能累加max
    if (flowerbed[i] === 0) {
      if (i === 0) {  // 左边界：下一个元素为0（或者数组就这一个元素），则有效
        if (flowerbed[1] === 0 || len === 1) {
          max++
          i++   // 跳过下一个元素
        }
      } else if (i === len - 1) {   // 右边界：前一个元素为0，则有效
        if (flowerbed[len - 2] === 0) {
          max++
        }
      } else {    // 中间情况：两边如果都为0，则有效
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          max++
          i++   // 跳过下一个元素
        }
      }
    }
  }
  return max >= n
};
```