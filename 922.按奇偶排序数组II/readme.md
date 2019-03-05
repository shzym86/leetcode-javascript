[922. 按奇偶排序数组 II](https://leetcode-cn.com/problems/sort-array-by-parity-ii/)

> 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
> 
> 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

算法原理：

为一个空数组指定一个奇数位指针和一个偶数位指针，遍历整个原数组，将元素按奇偶要求插入奇数位或偶数位即可。

```js
var sortArrayByParityII = function(A) {
    let r = []
    let odd = 1, even = 0
    A.forEach(item => {
        if(item % 2 === 1) {
            r[odd] = item
            odd += 2
        } else {
            r[even] = item
            even += 2
        }
    })
    return r
};
```