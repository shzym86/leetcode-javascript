var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  // 将纯数字映射成字母数组
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let charactors = digits.toString().split('').map(item => {
    return map[item]
  })

  // 组合函数
  let combine = arr => {
    if (arr.length === 1) {
      return arr[0].toString().split('')
    }

    let temp = []
    for (let i = 0; i < arr[0].length; i++) {   // arr[0] 第一轮循环时是字符串，以后则是上一次运算结果的数组
      for (let j = 0; j < arr[1].length; j++) { // arr[1] 总是字符串
        temp.push(arr[0][i] + arr[1][j])
      }
    }
    // 删除原数组用于计算的两项，将上一次的运算结果插到第一项
    arr.splice(0, 2, temp)

    // 只要大于两项元素都可以不断进行组合运算
    if (arr.length > 1) {
      combine(arr)
    } else {
      return temp
    }

    return arr[0]
  }

  // 对字母数组进行递归组合运算，对原数组直接修改并返回结果。
  return combine(charactors)
};