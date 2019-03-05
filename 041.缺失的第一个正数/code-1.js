var firstMissingPositive = function (nums) {
  // 过滤负数
  nums = nums.filter(item => item > 0)
  // 完整排序，处理特殊情况
  if (nums.length > 0) {
    nums.sort((a, b) => a - b)
    // 如 [7, 8, 9]
    if (nums[0] !== 1) {
      return 1
    }
  } else {
    return 1
  }

  // 寻找中间缺失的正数，如 [1, 2, 4, 5]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      return nums[i] + 1
    }
  }

  // 也可能是连续的正数，如 [1, 2, 2, 3, 4, 5]
  return nums.pop() + 1
}