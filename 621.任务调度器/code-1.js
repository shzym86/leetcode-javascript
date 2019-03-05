var leastInterval = function (tasks, n) {
  // 将CPU任务按出现频率由高到低排序，且相同任务紧挨着
  // 例如：["A", "A", "B", "B", "B", "C"] ==> [ 'B', 'B', 'B', 'A', 'A', 'C' ]
  let s = tasks.sort().join("").match(/(\w)\1+|\w/g).sort((a, b) => b.length - a.length).join("")
  // 最高频次
  let m = /(\w)\1+|\w/.exec(s)[0].length
  // 相同最高频次的字母个数
  let re = new RegExp(`(\\w)\\1{${m - 1}}`, "g")
  let k = s.match(re).length
  // 理论最小长度
  let minLength = (m - 1) * (n + 1) + k
  // 有可能原数组长度更大
  return Math.max(minLength, tasks.length)
};