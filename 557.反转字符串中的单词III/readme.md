557. [反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
 
> 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。输入: "Let's take LeetCode contest" -> 输出: "s'teL ekat edoCteeL tsetnoc" 

```js
var reverseWords = function (str) {
  return str.split(" ").map(item => {
    return item.split("").reverse().join("")
  }).join(" ")
};
```