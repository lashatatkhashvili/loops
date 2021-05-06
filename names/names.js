const fs = require("fs");
const namesString = fs.readFileSync("./names.txt", "utf-8");
const namesArray = namesString.replace(/"/g, "").split(",");

const namesScores = (array) =>
  array
    .sort()
    .reduce(
      (a, c, i) =>
        a + c.split("").reduce((a, c) => a + c.charCodeAt(0) - 64, 0) * (i + 1),
      0
    );

console.log(namesScores(namesArray));
