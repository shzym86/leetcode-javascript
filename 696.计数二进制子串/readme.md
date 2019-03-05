696. [计数二进制子串](https://leetcode-cn.com/problems/count-binary-substrings/)

> 给定一个字符串 s，输出具有相同数量0和1的非空(连续)子字符串，并且这些子字符串中的所有0和所有1都是组合在一起的。输入: "00110011"；输出: “0011”，“01”，“1100”，“10”，“0011” 和 “01”

【解法一】原理：根据索引去每一个子串，首先确定开头有 n 个连续的 1 或 0 （用正则匹配），然后得知后面应该接上 n 个相反的 0 或 1。根据规则构造一个符合条件的子串，看看是否能和子串的开头相同。

```js
var countBinarySubstrings = function (s) {
  // 建立数据结构，堆栈，保存数据
  let result = []
  // 给定任意子串进行匹配
  let match = (subStr) => {
    let j = subStr.match(/^(0+|1+)/g)[0]
    // 构造符合条件的子串，看能否匹配的到
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let re = new RegExp(`^(${j}${o})`)
    if (re.test(subStr)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 遍历，检查每一个子串
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (sub = match(s.slice(i))) {
      result.push(sub)
    }
  }
  return result
};
```

> 正则匹配 Leetcode 无法通过，因为测试用例的长度超出 RegExp 的限制。

【解法二】原理：遍历字符串，累加重复的字符个数。假设前一个字符连续重复了 `m` 次，后一个字符连续重复 `n` 次，当 `n <= m` 时，一定存在 `n` 个符合条件的子串。当 `n > m` 时，则存在 `m` 个符合条件的子串。

```js
var countBinarySubstrings = function (s) {
  // prev 前一个数字连续出现的次数
  // cur 当前数字连续出现的次数
  // result 符合条件的子串个数
  let prev = 0, cur = 1, result = 0
  for (let i = 0, len = s.length - 1; i < len; i++) {
    // 后一个数字和前一个相同，则累加当前数字出现的次数
    if (s[i] === s[i + 1]) {
      cur++
    } else {
      // 不同，则当前数字的次数重置为1，开始累加新数字的次数
      prev = cur
      cur = 1
    }
    if (prev >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
      result++
    }
  }
  return result
};
```