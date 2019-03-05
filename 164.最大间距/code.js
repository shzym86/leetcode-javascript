var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  let max = 0
  let len = nums.length - 1
  // 修改的冒泡排序（遍历到第一个元素为止，相当于自己和自己交换一次）
  for (let i = len; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    // 将最近确定顺序的两个元素的差值记录
    if (i < len) {
      if (nums[i + 1] - nums[i] > max) {
        max = nums[i + 1] - nums[i]
      }
    }
  }
  return max
};