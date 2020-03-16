let algos = require("../removeSpaces.js");

//REMOVE SPACES

test("removes spaces from string", () => {
  expect(algos.removeSpaces("alphabet soup is green   ")).toBe(
    "alphabetsoupisgreen"
  )
})

