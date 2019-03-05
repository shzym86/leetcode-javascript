var leastInterval = function (tasks, n) {
  // 将CPU任务按出现频率由高到低排序，且同一个任务紧挨着，作为一个队列
  // 例如：["A", "A", "B", "B", "B", "C"] ==> [ 'B', 'B', 'B', 'A', 'A', 'C' ]
  tasks = tasks.sort().join("").match(/(\w)\1+|\w/g).sort((a, b) => b.length - a.length).join("").split("")
  // 将任务推送到真正运行的 CPU 队列中去，直到全部放进去
  let queue = []
  let len = tasks.length
  while (len > 0) {
    if (queue.length === 0) {
      queue.push(tasks.shift())
      len--
    } else {
      // 如何按要求推任务到CPU队列？
      // 遍历任务队列，CPU队列末尾 n 个元素如果不包含当前任务，则可以推进去。
      let slice = queue.slice(-n)
      for (let i = 0; i < len; i++) {
        if (!slice.includes(tasks[i])) {
          let task = tasks.splice(i, 1)
          queue.push(task[0])
          len--
          break
        }
        // 如果所有元素都不满足条件，推入空值。
        if (i === len - 1) {
          queue.push("-")
        }
      }
    }
  }
  return queue
};