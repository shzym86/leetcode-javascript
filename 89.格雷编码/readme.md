89. [格雷编码](https://leetcode-cn.com/problems/gray-code/)

> 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。

算法原理：

格雷编码二进制序列的长度为 2 的 n 次方。第一位作为高位数，一半是 0 一半是 1，剩下的低位可以看作是矩阵，上下两部分是对称关系，上半部分的数组矩阵是 n-1 的格雷二进制序列。因此需要不断向前去递归，递归出口是 n=1 的情况。

```js
var grayCode = function(n) {
  // 递归函数，用来计算输入n的格雷编码序列
  let makeBinary = (n) => {
    // 0 是特殊情况
    if (n === 0) return [0]
    // 1 是递归出口，最小的低位数组是 [0, 1]
    if (n === 1) return [0, 1]
    // 递归生成低位数组
    let prev = makeBinary(n - 1)
    // 低位对称操作
    let result = []
    let maxIndex = Math.pow(2, n) - 1
    for (let i = 0, len = prev.length; i < len; i++) {
      // 低位对称的同时分别加上高位的 0 或 1
      result[i] = `0${prev[i]}`
      result[maxIndex - i] = `1${prev[i]}`
    }
    return result
  }

  // return makeBinary(n)
  return makeBinary(n).map(v => parseInt(v, 2))
};
```

- 最简单的解法：格雷编码的生成过程是 G(i) = i ^ (i/2)

```js
/**
    如 n = 3: 
    G(0) = 0 ^ 0 = 000 ^ 000 = 000 
    G(1) = 1 ^ 0 = 001 ^ 000 = 001
    G(2) = 2 ^ 1 = 010 ^ 001 = 011 
    G(3) = 3 ^ 1 = 011 ^ 001 = 010
    G(4) = 4 ^ 2 = 100 ^ 010 = 110
    G(5) = 5 ^ 2 = 101 ^ 010 = 111
    G(6) = 6 ^ 3 = 110 ^ 011 = 101
    G(7) = 7 ^ 3 = 111 ^ 011 = 100
**/
var grayCode = function (n) {
  let result = []
  for (let i = 0; i < Math.pow(2, n); i++) {
    result.push(i ^ Math.floor(i / 2))
  }
  return result
};
```