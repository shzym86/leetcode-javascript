var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    // 遍历的元素为0才有可能累加max
    if (flowerbed[i] === 0) {
      if (i === 0) {  // 左边界：下一个元素为0（或者数组就这一个元素），则有效
        if (flowerbed[1] === 0 || len === 1) {
          max++
          i++   // 跳过下一个元素
        }
      } else if (i === len - 1) {   // 右边界：前一个元素为0，则有效
        if (flowerbed[len - 2] === 0) {
          max++
        }
      } else {    // 中间情况：两边如果都为0，则有效
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          max++
          i++   // 跳过下一个元素
        }
      }
    }
  }
  return max >= n
};