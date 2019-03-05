[867. 转置矩阵](https://leetcode-cn.com/problems/transpose-matrix/)

> 给定一个矩阵 A， 返回 A 的转置矩阵。矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
> 
> ```
> 示例 1：
> 
> 输入：[[1,2,3],[4,5,6],[7,8,9]]
> 输出：[[1,4,7],[2,5,8],[3,6,9]]
> 
> 示例 2：
> 
> 输入：[[1,2,3],[4,5,6]]
> 输出：[[1,4],[2,5],[3,6]]
> ```

算法原理：

按 列->行 遍历矩阵的每一个元素，把每一列的 n 个元素预存到一个列数组中，再把它复制到转置矩阵中，作为新矩阵的行。

```js
var transpose = function (A) {
  let rows = A.length
  let columns = A[0].length
  let matrix = []
  for (let i = 0; i < columns; i++) {
    let tmp = []
    for (let j = 0; j < rows; j++) {
      tmp.push(A[j][i])
    }
    matrix.push(tmp)
  }
  return matrix
};
```

> 注：不能直接操作 `B[i][j] = A[j][i]`，如果 B 的结构未“成型”则会报错。