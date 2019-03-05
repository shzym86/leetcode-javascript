[30. 串联所有单词的子串](https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/)

> 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

算法原理：

题目可以抽象成计算数组 words 的所有元素的全排列情况，然后到字符串中去匹配每个排列项。

```js
var findSubstring = function (s, words) {
  let result = []
  // 第一个参数保存每次递归的结果，第二个参数是待处理的数组
  let range = (arr, r = []) => {
    // 边界条件
    if (arr.length === 0) {
      result.push(r.join(""))
    } else {
      arr.forEach((item, idx) => {
        let tmp = [...arr] // 复制数组
        tmp.splice(idx, 1)  // 剔除当前元素
        // 递归
        range(tmp, r.concat(item))
      })
    }
  }
  range(words)
  // 遍历所有子串查询是否包含
  return result.map(v => s.indexOf(v)).filter(v => v !== -1)
  // 上面代码有 BUG；原题的意思应该返回所有找到的索引值
  // "foobarfoobar", ["foo", "bar"]  ==> [0, 3, 6] (not [0, 3])
  // let ri = []
  // result.forEach(item => {
  //   let pos = s.indexOf(item)
  //   while (pos > -1) {
  //     ri.push(pos);
  //     pos = s.indexOf(item, pos + 1);
  //   }
  // })
  // return ri
};
```

> 上述代码 Leetcode 测试无效，显示超出时间限制，这是由于官方测试用例太长，全排列算法的性能很差。但是本题使用递归的思想是正确的。