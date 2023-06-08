function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let sum = 0;
    for (i = 0; i < arr3.length; i++) {
    sum += arr3[i];
   }
    return sum;
  }