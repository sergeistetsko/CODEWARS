function sumOfDifferences(arr) { 
    if (arr.length < 2) { return 0;
    }
    arr = arr.sort((a,b) => a-b)
    let arr1 = [];
    for (let i = 0; i< arr.length-1; i++) {
      let arr2 = Math.abs(arr[i] - arr[i+1])
      arr1.push(arr2);
    }
      return arr1.reduce((p,n)=>p+n)
    }