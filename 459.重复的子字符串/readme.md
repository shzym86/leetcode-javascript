459. [重复的子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/submissions/)

> 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。如 "abab" 可由子字符串 "ab" 重复两次构成。

算法原理：正则表达式模式匹配，用括号捕获可能重复的单元，紧接着用 `\1` 拿到捕获的子串，两者必须相邻。如果匹配到也就是说明发现了某个子串重复了一次。继续重复若干次加上量词 `+` 即可，也就是至少重复一次。最后再限制边界。

```js
var repeatedSubstringPattern = function(s) {
    return /^(\w+)\1+$/.test(s)
};
```