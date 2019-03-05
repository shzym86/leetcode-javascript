[48. 旋转图像](https://leetcode-cn.com/problems/rotate-image/)

> 给定一个 n × n 的二维矩阵表示一个图像。
> 
> 将图像顺时针旋转 90 度。
> 
> 说明：
> 
> 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
> 
> ```
> 给定 matrix = 
> [
>   [1,2,3],
>   [4,5,6],
>   [7,8,9]
> ],
> 
> 原地旋转输入矩阵，使其变为:
> [
>   [7,4,1],
>   [8,5,2],
>   [9,6,3]
> ]
> ```

算法原理：

矩形顺时针旋转90度，由于要在原地修改矩阵，所以只能通过元素之间的交换来实现。找到交换规律后，共两步：

- 以中间横轴为分界线上下部分的元素交换
- 以“左上-右下”斜对角线为轴，左下-右上两部分的元素交换

```js
var rotate = function (matrix) {
  let len = matrix.length
  // 以中间横轴为分界线上下交换；遍历上半部分去主动交换
  for (let j = 0; j < len / 2; j++) {
    for (let i = 0; i < len; i++) {
      [matrix[j][i], matrix[len - j - 1][i]] = [matrix[len - j - 1][i], matrix[j][i]]
    }
  }
  // 以左上-右下对角线为轴，左下-右上交换；遍历左下部分主动去交换
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < j; i++) {     
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
  }
  return matrix
};
```