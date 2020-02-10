let algos = require("../removeSpaces.js");

//REMOVE SPACES
//return the given string without spaces
test("removes spaces from string", () => {
  expect(algos.removeSpaces("alphabet soup is green")).toBe(
    "alphabetsoupisgreen"
  )
})

  