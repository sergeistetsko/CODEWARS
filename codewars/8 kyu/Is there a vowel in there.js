function isVow(a){
    return  a.map(
        charCode =>
          /[aeiou]/.test(String.fromCharCode(charCode))
            ? String.fromCharCode(charCode)
            : charCode)}