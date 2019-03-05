17. [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

> 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

- 算法原理：首先将纯数字映射成字母数组。对字母数组进行原地修改的组合运算，每次组合运算后的结果生成一个新数组，将其插到原数组最前面，并删除前两项用来运算的基元素。这时候继续递归做组合运算，也就是将刚才生成的新数组与原来的第三项元素进行运算。以此类推，递归出口为原数组只含有最后一次的结果数组，也就是直到无法继续进行下一次的组合运算为止。

```js
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  // 将纯数字映射成字母数组
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let charactors = digits.toString().split('').map(item => {
    return map[item]
  })

  // 组合函数
  let combine = arr => {
    if (arr.length === 1) {
      return arr[0].toString().split('')
    }

    let temp = []
    for (let i = 0; i < arr[0].length; i++) {   // arr[0] 第一轮循环时是字符串，以后则是上一次运算结果的数组
      for (let j = 0; j < arr[1].length; j++) { // arr[1] 总是字符串
        temp.push(arr[0][i] + arr[1][j])
      }
    }
    // 删除原数组用于计算的两项，将上一次的运算结果插到第一项
    arr.splice(0, 2, temp)

    // 只要大于两项元素都可以不断进行组合运算
    if (arr.length > 1) {
      combine(arr)
    } else {
      return temp
    }

    return arr[0]
  }

  // 对字母数组进行递归组合运算，对原数组直接修改并返回结果。
  return combine(charactors)
};
```