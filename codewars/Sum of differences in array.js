function sumOfDifferences(arr) {
    return Math.max.apply(null, arr) - Math.min.apply(null, arr);
  }