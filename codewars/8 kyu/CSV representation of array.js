function toCsvText(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += array[i];
      if (i != array.length - 1) {
      string += "\n"
  }
    } 
    return string;
  }