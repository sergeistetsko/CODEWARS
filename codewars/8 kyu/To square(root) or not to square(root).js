const isSquareRootInteger = num => Number.isInteger(Math.sqrt(num))

const squareOrSquareRoot = array =>
  array.map(num => (isSquareRootInteger(num) ? Math.sqrt(num) : num ** 2))