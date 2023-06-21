const isNatural = animal => animal >= 0 && Number.isInteger(animal)
const animals = (heads, legs) => {
  const cows = legs / 2 - heads
  const chickens = heads - cows

  return isNatural(chickens) && isNatural(cows)
    ? [chickens, cows]
    : 'No solutions'
}