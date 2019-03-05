var sortArrayByParityII = function (A) {
  let r = []
  let odd = 1, even = 0
  A.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
};