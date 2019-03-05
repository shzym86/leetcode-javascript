var grayCode = function (n) {
  // 递归函数，用来计算输入n的格雷编码序列
  let makeBinary = (n) => {
    // 0 是特殊情况
    if (n === 0) return [0]
    // 1 是递归出口，最小的低位数组是 [0, 1]
    if (n === 1) return [0, 1]
    // 递归生成低位数组
    let prev = makeBinary(n - 1)
    // 低位对称操作
    let result = []
    let maxIndex = Math.pow(2, n) - 1
    for (let i = 0, len = prev.length; i < len; i++) {
      // 低位对称的同时分别加上高位的 0 或 1
      result[i] = `0${prev[i]}`
      result[maxIndex - i] = `1${prev[i]}`
    }
    return result
  }

  // return makeBinary(n)
  return makeBinary(n).map(v => parseInt(v, 2))
};