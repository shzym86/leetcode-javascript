var findSubstring = function (s, words) {
  let result = []
  // 第一个参数保存每次递归的结果，第二个参数是待处理的数组
  let range = (arr, r = []) => {
    // 边界条件
    if (arr.length === 0) {
      result.push(r.join(""))
    } else {
      arr.forEach((item, idx) => {
        let tmp = [...arr] // 复制数组
        tmp.splice(idx, 1)  // 剔除当前元素
        // 递归
        range(tmp, r.concat(item))
      })
    }
  }
  range(words)
  // 遍历所有子串查询，返回所有找到的索引值
  // "foobarfoobar", ["foo", "bar"] ==> [0, 3, 6](not[0, 3])
  let ri = []
  result.forEach(item => {
    let pos = s.indexOf(item)
    while (pos > -1) {
      ri.push(pos);
      pos = s.indexOf(item, pos + 1);
    }
  })
  return ri
}