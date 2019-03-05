var countBinarySubstrings = function (s) {
  // 建立数据结构，堆栈，保存数据
  let result = []
  // 给定任意子串进行匹配
  let match = (subStr) => {
    let j = subStr.match(/^(0+|1+)/g)[0]
    // 构造符合条件的子串，看能否匹配的到
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let re = new RegExp(`^(${j}${o})`)
    if (re.test(subStr)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 遍历，检查每一个子串
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (sub = match(s.slice(i))) {
      result.push(sub)
    }
  }
  return result
};