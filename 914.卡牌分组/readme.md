914. [卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

> 给定一副牌，每张牌上都写着一个整数。此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：每组都有 X 张牌。组内所有的牌上都写着相同的整数。仅当你可选的 X >= 2 时返回 true。

```js
var hasGroupsSizeX = function (deck) {
  const map = {}
  // 统计每个数出现的次数
  for (let num of deck) {
    map[num] = ~~(map[num]) + 1     // 第一次 ~~undefined = 0 然后+1
  }
  const dst = Object.values(map)
  // 最小出现的次数
  const min = Math.min(...dst)
  // 每组都有 X>=2 张牌
  if (min >= 2) {
    // 查找最大公约数，从整数2开始迭代直到最小值
    for (let i = 2; i <= min; i++) {
      // 如果数组中的每个数都能被整除，此时的 i 就是最大公约数
      if (dst.every(val => val % i === 0)) {
        return true
      }
    }
  }
  return false
};
```


附：提供一个求解最大公约数的算法。

```js
function getMaxCommonDivisor(arr) {
  // 获取一组数中的最小值
  let min = Math.min(...arr)
  // 从整数2开始迭代直到最小值
  for (let i = 2; i <= min; i++) {
    // 如果数组中的每个数都能被整除，这个数就是最大公约数
    if (arr.every(item => item % i === 0)) {
      return i
    }
  }
  return null
}
```