var findKthLargest = function (nums, k) {
  let len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
  return nums[len - k + 1]
};