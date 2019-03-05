var mostCommonWord = function (paragraph, banned) {
  let target = "", maxTimes = 0, map = new Map()
  let words = paragraph.toLowerCase().match(/\w+/g)
  for (let word of words) {
    if (banned.indexOf(word) === -1) {
      map[word] = ~~map[word] + 1
      // 不断更新最大的计数以及对应的单词
      if (map[word] >= maxTimes) {
        target = word
        maxTimes = map[word]
      }
    }
  }
  return target
};