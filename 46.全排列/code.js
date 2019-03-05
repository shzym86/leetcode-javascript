var permute = function (nums) {
  // 定义保存结果的数组
  let rs = []
  // 定义递归函数
  let arrange = (arr, r = []) => {
    // 递归出口
    if (arr.length === 0) {
      // r 在遍历过程中已经不断追加了每一个排列项
      // 保存某一种全排列结果
      rs.push(r)
    } else {
      arr.forEach((item, index) => {
        // 不能在原数组上操作，引用类型
        let tmp = [...arr]
        // 剔除元素
        tmp.splice(index, 1)
        // 使用剔除当前元素的数组和追加了当前剔除元素的结果集，递归
        arrange(tmp, r.concat(item))
      })
    }
  }
  // 开始遍历
  arrange(nums)
  return rs
};