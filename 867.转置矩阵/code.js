var transpose = function (A) {
  let rows = A.length
  let columns = A[0].length
  let matrix = []
  for (let i = 0; i < columns; i++) {
    let tmp = []
    for (let j = 0; j < rows; j++) {
      tmp.push(A[j][i])
    }
    matrix.push(tmp)
  }
  return matrix
};