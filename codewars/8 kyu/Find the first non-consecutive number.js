function firstNonConsecutive (arr) {
    const result = arr.find((number, index) => number !== index + arr[0])
    return Number.isInteger(result) ? result : null
  }