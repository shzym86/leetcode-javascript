var rotate = function (matrix) {
  let len = matrix.length
  // 以中间横轴为分界线上下交换；遍历上半部分去主动交换
  for (let j = 0; j < len / 2; j++) {
    for (let i = 0; i < len; i++) {
      [matrix[j][i], matrix[len - j - 1][i]] = [matrix[len - j - 1][i], matrix[j][i]]
    }
  }
  // 以左上-右下对角线为轴，左下-右上交换；遍历左下部分主动去交换
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < j; i++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
  }
  return matrix
};