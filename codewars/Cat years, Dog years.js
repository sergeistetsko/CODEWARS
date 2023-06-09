var humanYearsCatYearsDogYears = function(humanYears) {
    let Years = [];
    if (humanYears == 1) { (Years[0] = humanYears); (Years[1] = 15); (Years[2] = 15); return Years};
    if (humanYears == 2) { (Years[0] = humanYears); (Years[1] = 15 + 9); (Years[2] = 15 + 9); return Years};
    if (humanYears > 2) { (Years[0] = humanYears); (Years[1] = (15 + 9 + (humanYears-2)*4)); (Years[2] = (15 + 9 + (humanYears-2)*5)); return Years};
  }
