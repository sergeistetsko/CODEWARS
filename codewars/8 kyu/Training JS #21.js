const fiveLine = s => {
    const sWithoutWhitespace = s.trim()
    let result = ''
  
    for (let i = 1; i <= 5; i++) {
      if (i === 5) {
        result += `${sWithoutWhitespace.repeat(i)}`
        break
      }
      result += `${sWithoutWhitespace.repeat(i)}\n`
    }
  
    return result
  }