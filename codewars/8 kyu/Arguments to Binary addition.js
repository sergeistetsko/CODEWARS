function arr2bin(arr){
    return arr
      .reduce(
        (total, value) => (typeof value === 'number' ? total + value : total),
        0
      )
      .toString(2)
  }