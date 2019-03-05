929. [独特的电子邮件地址](https://leetcode-cn.com/problems/unique-email-addresses/)

> 等价的电子邮件地址：对于 `@` 前的部分，要使 `+` 后面的内容全部忽略，并且忽略所有的 `.`。 例如，`alice.z@leetcode.com` 和 `alicez@leetcode.com` 会转发到同一电子邮件地址。  `m.y+name@email.com` 将转发到 `my@email.com`。实际的不同地址有多少？

算法原理：正则替换、去重

```js
var numUniqueEmails = function (emails) {
  let f = emails.map(item => {
    let host = item.split('@')[0].replace(/\+.*/g, "").replace(/\./g, "")
    let domain = item.split('@')[1]
    return `${host}@${domain}`
  })
  return [...new Set(f)].length
};
```
