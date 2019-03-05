[46. 全排列](https://leetcode-cn.com/problems/permutations/)

> 给定一个没有重复数字的序列，返回其所有可能的全排列。
> 
> ```
> 输入: [1,2,3]
> 输出:
> [
>   [1,2,3],
>   [1,3,2],
>   [2,1,3],
>   [2,3,1],
>   [3,1,2],
>   [3,2,1]
> ]
> ```

算法原理：

遍历数组，每次遍历剔除当前遍历的元素，并保存下来，剩余数组以同样的方式继续递归遍历，直到剩余数组为空到达递归出口。如下图所示，相当于遍历一颗二叉树，每次遍历到末端都会得到一种全排列结果。

![全排列算法图](https://github.com/shzym86/leetcode-javascript/raw/master/images/46.jpg)

```js
var permute = function (nums) {
  // 定义保存结果的数组
  let rs = []
  // 定义递归函数
  let arrange = (arr, r = []) => {
    // 递归出口
    if (arr.length === 0) {
      // r 在遍历过程中已经不断追加了每一个排列项
      // 保存某一种全排列结果
      rs.push(r)
    } else {
      arr.forEach((item, index) => {
        // 不能在原数组上操作，引用类型
        let tmp = [...arr]
        // 剔除元素
        tmp.splice(index, 1)
        // 使用剔除当前元素的数组和追加了当前剔除元素的结果集，递归
        arrange(tmp, r.concat(item))
      })
    }
  }
  // 开始遍历
  arrange(nums)
  return rs
};
```

> 注：`rs` 和 `r` 都是引用类型的数组， 遍历过程中会不断修改其值，递归结束当即得到了最终结果。在递归函数的参数中定义一个结果集，不断追加修改，这是一种常见的递归算法题的解题技巧。