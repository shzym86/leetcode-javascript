[47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

> 给定一个可包含重复数字的序列，返回所有不重复的全排列。
> 
> ```
> 输入: [1,1,2]
> 输出:
> [
>   [1,1,2],
>   [1,2,1],
>   [2,1,1]
> ]
> ```

算法原理：

全排列的算法和上题一致，只是需要额外处理去重的需求。具体为：首先将数组排序，在遍历数组元素时，先判断当前元素是不是和后一个元素相同，若是直接跳过，保证只递归连续相同的最后一个元素，避免重复。

```js
var permuteUnique = function (nums) {
  let rs = []
  let arrange = (arr, r = []) => {
    if (arr.length === 0) {
      rs.push(r)
    } else {
      // 涉及跳过索引，用 for 循环遍历
      for (let i = 0; i < arr.length; i++) {
        // 只处理连续相同的最后一个元素
        if (arr[i] !== arr[i + 1]) {
          let tmp = [...arr]
          tmp.splice(i, 1)
          arrange(tmp, r.concat(arr[i]))
        }
      }
    }
  }
  arrange(nums.sort())
  return rs
};
```