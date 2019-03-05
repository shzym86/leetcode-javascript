819. [最常见的单词](https://leetcode-cn.com/problems/most-common-word/)

> 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

算法原理：首先将字符串 (paragraph) 中所有 **有效的单词** 提取到一个数组中，利用 Map 类型来存放 **单词-计数** 的映射关系，实时更新最大的计数以及对应的单词，数组遍历结束后也获得了最大的计数单词。注意，放入 Map 前应当检查该单词是不是存在于禁用列表 (banned) 。

```js
var mostCommonWord = function (paragraph, banned) {
  let target = "", maxTimes = 0, map = new Map()
  let words = paragraph.toLowerCase().match(/\w+/g)
  for (let word of words) {
    if (banned.indexOf(word) === -1) {
      map[word] = ~~map[word] + 1
      // 不断更新最大的计数以及对应的单词
      if (map[word] >= maxTimes) {
        target = word
        maxTimes = map[word]
      }
    }
  }
  return target
};
```