var numUniqueEmails = function (emails) {
  let f = emails.map(item => {
    let host = item.split('@')[0].replace(/\+.*/g, "").replace(/\./g, "")
    let domain = item.split('@')[1]
    return `${host}@${domain}`
  })
  return [...new Set(f)].length
};