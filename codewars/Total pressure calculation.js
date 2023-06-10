solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    molarMass1 = givenMass1 * 0.001/molarMass1;
    molarMass2 = givenMass2 * 0.001/molarMass2;
    temp = temp + 273.15;
    let R = 0.082;

  return (((molarMass1 + molarMass2) * R * temp) / volume) * 1000;
}