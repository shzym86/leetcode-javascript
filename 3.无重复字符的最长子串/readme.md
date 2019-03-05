3. [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

> 给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。如 "pwwkew"， 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

算法原理：采用滑动窗口法，每次将遍历的元素放入一个数组，这个数组就称为“滑动窗口”，里面存放的一定是 **不重复** 的元素。遍历字符串时不断张开右边区间。一旦放入前发现了重复的元素，则压缩窗口的左区间到重复元素，始终保持不重复。遍历过程中滑动窗口的最大一次的长度就是 **无重复字符的最长子串** 的长度。

```js
var lengthOfLongestSubstring = function (s) {
  // 定义滑动窗口
  let slider = [], max = 0
  for (let i = 0; i < s.length; i++) {
    // 在滑动窗口中找到了与当前重复的值，则调整窗口区间
    if (slider.indexOf(s[i]) !== -1) {
      let j = slider.indexOf(s[i]) + 1
      slider.splice(0, j)
    }
    // 每个遍历的字符都要放入滑动窗口，每次保存最大的窗口长度
    slider.push(s[i])
    max = Math.max(max, slider.length)
  }
  return max
};
```