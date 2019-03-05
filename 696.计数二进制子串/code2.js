var countBinarySubstrings = function (s) {
  // prev 前一个数字连续出现的次数
  // cur 当前数字连续出现的次数
  // result 符合条件的子串个数
  let prev = 0, cur = 1, result = 0
  for (let i = 0, len = s.length - 1; i < len; i++) {
    // 后一个数字和前一个相同，则累加当前数字出现的次数
    if (s[i] === s[i + 1]) {
      cur++
    } else {
      // 不同，则当前数字的次数重置为1，开始累加新数字的次数
      prev = cur
      cur = 1
    }
    if (prev >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
      result++
    }
  }
  return result
};