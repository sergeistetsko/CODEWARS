function getNumberFromString(s) {
    return Number(s.match(/\d/g).join(''));
  }