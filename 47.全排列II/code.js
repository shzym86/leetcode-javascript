var permuteUnique = function (nums) {
  let rs = []
  let arrange = (arr, r = []) => {
    if (arr.length === 0) {
      rs.push(r)
    } else {
      // 涉及跳过索引，用 for 循环遍历
      for (let i = 0; i < arr.length; i++) {
        // 只处理连续相同的最后一个元素
        if (arr[i] !== arr[i + 1]) {
          let tmp = [...arr]
          tmp.splice(i, 1)
          arrange(tmp, r.concat(arr[i]))
        }
      }
    }
  }
  arrange(nums.sort())
  return rs
};