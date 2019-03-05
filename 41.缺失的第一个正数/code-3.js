var firstMissingPositive = function (nums) {
  let len = nums.length
  if (len === 0) return 1
  // 无限循环遍历数组，直到找到答案退出
  let min = 1
  while (true) {
    for (let i = 0; i < len; i++) {
      // 指定缺失正数从 1 开始，遍历数组元素一个个去碰它，碰到了就 +1，然后从头遍历数组再去碰
      if (nums[i] === min) {
        min++
        break
      } else {
        // 遍历完都没有碰到指定的缺失正数，那么答案就是它
        if (i === len - 1) {
          return min
        }
      }
    }
  }
};