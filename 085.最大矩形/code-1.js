var maximalRectangle = function (matrix) {

  let result = []

  /**
   * 第一步：构造新的矩阵，并且当做一个堆栈，待用
   */

  let stack = matrix.map(item => {
    // 将某一行的数组 ["1", "0", "1", "1", "1"] 转成字符串 "10111"
    let line = item.join("")
    // 将连续两个 1 以上的情况进行分组，记录起始位置和截止位置，利用 while 循环匹配所有
    let reg = /1{2,}/g
    let regRes = reg.exec(line)   // ["0": "111", index: 2] 每次找到第一个匹配的值及其索引；匹配不到返回 null
    let posGroup = []
    while (regRes) {
      let startPos = regRes.index
      let endPos = startPos + regRes[0].length - 1
      // 将匹配到的一组 1 的起始位置和截止位置作为一个数组，放到新的二维矩阵的行中
      posGroup.push([startPos, endPos])
      // 继续匹配所有
      regRes = reg.exec(line.slice(endPos + 1))
    }
    return posGroup
  })


  /**
   * 第二步：定义计算矩形最大面积的递归函数
   */

  // 第一个参数是参与运算的栈，第二个参数存放每次递归后的结果，第三个参数记录当前运算到了第几行
  let maxRect = (stack, result, rowNum = 2) => {

    // 提取需要参与 “交集” 运算的前两行，即连续推出两个栈顶元素
    let top = stack.pop()
    let next = stack.pop()
    // “交集”运算是将这两行之间的所有数组分别进行交叉运算，并存储所有有结果的情况
    let start
    let end
    let width = 1
    let maxWidth = 1
    for (let i = 0, il = top.length; i < il; i++) {
      for (let j = 0, jl = next.length; j < jl; j++) {
        // 计算宽度：即 top[i] 和 next[j] 两个数组之间的 “起始位置的最大值” 和 “截止位置的最小值” 的差值
        width = Math.min(top[i][1], next[j][1]) - Math.max(top[i][0], next[j][0])
        // 找出当前两行 “交集” 运算中最大的一次宽度
        if (width > maxWidth) {
          maxWidth = width
          // 至少找到一次交叉点才会记录变量 start 和 end 的值
          start = Math.max(top[i][0], next[j][0])
          end = Math.min(top[i][1], next[j][1])
        }
      }
    }
    // 递归的边界条件
    // 如果所有交叉情况都没有找到交叉点，即 start 或 end 没有被赋值，那么还可能有两种情况：
    // 1. 前两行就没有找到，直接结束
    // 2. 非前两行没有找到，则说明上面的矩形断开了，那么可以用当前运算到的行数来表征这个矩形的最大高度
    if (start === undefined || end === undefined) {
      if (rowNum === 2) {
        return false
      } else {
        // 最大矩形宽度就是上一行的矩形的宽度，高度就是处理的行数 - 1
        width = top[0][1] - top[0][0] + 1
        // 严格检查一下它是不是矩形，将本轮运算的最大矩形面积放入结果数组中
        if (width > 1) {
          result.push((rowNum - 1) * width)
        }
      }
    } else {
      // 如果两行的 “交集” 运算找到了交叉点，那么上述代码已经保存了最大宽度的位置
      // 将这个最大宽度继续与下一行进行交集，看看在当前宽度下能否交叉到更高的行数
      stack.push([[start, end]])
      maxRect(stack, result, rowNum + 1)
    }
  }

  // 每一行都要作为起始行，往下进行连续的 “交集” 运算，避免遗漏
  while (stack.length > 1) {
    maxRect([...stack], result)
    stack.pop()
  }

  // 在以每一行作为起始行开始的连续运算时得到的最大面积值中最终再取其中的最大值返回
  return Math.max(...result)
};

maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]);     // 6