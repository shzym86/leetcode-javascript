var isValid = function (s) {
  let code = ['(', '[', '{', ')', ']', '}']
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let j = code.indexOf(s[i])
    if (j < 3) {
      stack.push(s[i])
    } else {
      if (stack.pop() !== code[j - 3]) {
        return false
      }
    }
  }
  return !stack.length
};