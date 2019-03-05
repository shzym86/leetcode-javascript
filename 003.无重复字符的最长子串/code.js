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