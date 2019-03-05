var repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s)
};