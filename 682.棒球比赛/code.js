var calPoints = function (ops) {
  let stack = [];
  let r = ops.forEach(item => {
    let len = stack.length;
    switch (item) {
      case "C":
        stack.pop();
        break;
      case "D":
        stack.push(stack[len - 1] * 2);
        break;
      case "+":
        stack.push(stack[len - 1] + stack[len - 2]);
        break;
      default:
        stack.push(item * 1);
    }
  });
  return stack.reduce((a, b) => a + b);
};