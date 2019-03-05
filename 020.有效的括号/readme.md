20. [有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串。

算法原理：配对问题一般需要用到栈数据结构。遍历字符串，如果遇到左括号，则依次入栈，如果遇到右括号，则判断出栈元素是不是它对应的左半部分。如果完全匹配，那么最后所有元素应该全部出栈。

```js
var isValid = function (s) {
  let code = ['(', '[', '{', ')', ']', '}']
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let j = code.indexOf(s[i])
    if (j < 3) {
      stack.push(s[i])
    } else {
      if (stack.pop() !== code[j - 3]) {
        return false
      }
    }
  }
  return !stack.length
};
```