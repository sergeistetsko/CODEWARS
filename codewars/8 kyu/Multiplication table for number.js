function multiTable(number) {
    let array = [];
    for (i = 1; i <= 10; i++) {
      array[i-1] = (i + " * " + number + " = " + i*number);
    }
    return array.join("\n");
  }