// Find friends
const findFriends = (arr) => arr.filter((item) => item.length === 4);

let people = ["James", "Will", "Jack", "Nate", "Edward"];

console.log(findFriends(people));

// Sum  of the two lowest positive numbers
const sumTwoLowest = (arr) =>
  arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, val) => acc + val);

let numbers = [52, 76, 14, 12, 4];

console.log(sumTwoLowest(numbers));
