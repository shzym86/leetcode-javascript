var maxIncreaseKeepingSkyline = function (grid) {
  let len = grid[0].length, diff = 0
  for (let i = 0; i < len; i++) {
    // 直接得到第 i 行的最大值
    let rowMax = Math.max(...grid[i])
    for (let j = 0; j < len; j++) {
      // 计算第 j 列的最大值
      let colMax = 0
      for (let k = 0; k < len; k++) {
        if (grid[k][j] > colMax) {
          colMax = grid[k][j]
        }
      }
      // (i, j) 最大取值为 第 i 行的最大值 和 第 j 列的最大值 之间的较小的那个数
      // 用最大取值减去当前的数，就是最大可以增加的建筑物高度
      diff += (Math.min(rowMax, colMax) - grid[i][j])
    }
  }
  return diff
};