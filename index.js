class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    const stringArray = string.split(' ')
    for(let i = 0; i < stringArray.length; i++){
      stringArray[i] = stringArray[i].replace(/[^A-Za-z0-9-']+/g, '')
    }
    return stringArray.join(' ')
  }

  static titleize(string){
    const newString = string.charAt(0).toUpperCase() + string.slice(1)
    const stringArray = newString.split(' ')
    const exclude = ['of', 'the', 'a', 'an', 'but', 'and', 'for', 'at', 'by', 'from']
    for(let i = 1; i < stringArray.length; i++){
      if(!exclude.includes(stringArray[i])){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
      }
    }
    return stringArray.join(' ')
  }
}