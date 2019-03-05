[54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)

> 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

算法原理：

用递归分别处理每一圈的逆时针操作，每一圈遍历后需要将外圈元素全部剔除，留下的小矩形继续递归。递归的边界条件是，不断剥离外圈直到内层矩形不存在为止。每一圈的操作依次为：
- 按行遍历：
    - 遇到第一行直接保存（1,2,3）
    - 遇到中间行提取最后一个元素，并原地删除（6）
    - 遇到最后一行反转保存（9,8,7）
- 删除第一行和最后一行
- 反向遍历第一列的元素，并原地删除（4）—— **这一步有坑！**
    - 如果原矩阵只有一列，那么右边 `pop()` 操作已经将这列弹出去了，所以遍历第一列时为空数组 `[]`，`shift()` 操作会弹出 `undefined` 并被推到结果中，应当删了它。
    - 如果原地删除队首元素后留下了空数组，也应该当场删了它，否则下一圈的 `pop()` 操作也会推入 `undefined` 。
- 第二圈递归……（5）

> ```
> 输入:
> [
>  [ 1, 2, 3 ],
>  [ 4, 5, 6 ],
>  [ 7, 8, 9 ]
> ]
> 输出: [1,2,3,6,9,8,7,4,5]
> ```

```js
var spiralOrder = function (matrix) {
  // 定义处理每一圈操作的递归函数
  let circle = (arr, r = []) => {
    // 按行遍历
    for (let i = 0, len = arr.length; i < len; i++) {
      // 遇到第一行直接保存
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len - 1) {   // 遇到最后一行反转保存
        r = r.concat(arr[i].reverse())
      } else {  // 遇到中间行保存最后一个元素，并原地删除
        r.push(arr[i].pop())
      }
    }
    // 删除第一行和最后一行
    arr.shift()
    arr.pop()
    // 反向按行遍历第一列的元素，并原地删除
    for (let i = arr.length - 1; i >= 0; i--) {
      // 如果原矩阵只有一列，那么右边操作已经将这列弹出去了，所以遍历第一列时为空数组 []，会将 undefined 推到结果中
      if (arr[i].length > 0) {
        r.push(arr[i].shift())
        // 如果删除队首元素后留下了空数组，也应该当场删了它，否则影响下一圈
        if (arr[i].length == 0) {
          arr.splice(i, 1)
        }
      } else {  // 如果第一列为空数组那么直接删了它
        arr.splice(i, 1)
      }
    }
    // 如果内圈还有小矩形，则继续递归，否则返回结果
    if (arr.length > 0) {
      return circle(arr, r)
    } else {
      return r
    }
  }

  return circle(matrix)
};
```