//REMOVE SPACES
//return the given string without spaces
const removeSpaces = str => {
  let string = ""
  let split = str.split(" ")
  split.forEach(word => {
    string += word
  })
  return string
}
console.log(removeSpaces("alphabet soup is green"))

module.exports = {
  removeSpaces
}
