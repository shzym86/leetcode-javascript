var firstMissingPositive = function (nums) {
  nums = nums.filter(item => item > 0)
  if (nums.length === 0) return 1
  // 选择排序
  for (let i = 0; i < nums.length; i++) {
    let min = i
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        // 不断记录最小值的索引
        min = j
      }
    }
    // 每一轮排序过后，最小值交换到了第一个
    [nums[i], nums[min]] = [nums[min], nums[i]]
    if (nums[0] !== 1) {
      return 1
    }
    // 从第二轮开始，每次检查相邻的最小值差值
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1
      }
    }
  }
  // 排序完如果是连续的正数，答案是最大值 +1
  return nums.pop() + 1
}