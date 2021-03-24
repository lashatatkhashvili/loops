let tourists = [
  {
    name: "Mark",
    age: 19,
    cities: ["Tbilisi", "London", "Rome", "Berlin"],
    expenses: [120, 200, 150, 140],
    stats: {},
  },
  {
    name: "Bob",
    age: 21,
    cities: ["Miami", "Moscow", "Vienna", "Riga", "Kiev"],
    expenses: [90, 240, 100, 76, 123],
    stats: {},
  },
  {
    name: "Sam",
    age: 22,
    cities: ["Tbilisi", "Budapest", "Warsaw", "Vilnius"],
    expenses: [118, 95, 210, 236],
    stats: {},
  },
  {
    name: "Anna",
    age: 20,
    cities: ["New York", "Athens", "Sydney", "Tokyo"],
    expenses: [100, 240, 50, 190],
    stats: {},
  },
  {
    name: "Alex",
    age: 23,
    cities: ["Paris", "Tbilisi", "Madrid", "Marseille", "Minsk"],
    expenses: [96, 134, 76, 210, 158],
    stats: {},
  },
];

for (let i = 0; i < tourists.length; i++) {
  // Adult or not
  tourists[i].stats.adult = tourists[i].age > 20 ;

  // Visited or not
  for (let a = 0; a < tourists[i].cities.length; a++) {
    tourists[i].stats.georgia =
      tourists[i].cities[a] === "Tbilisi" ? "Has visited" : "Has not visited";
    if (tourists[i].stats.georgia === "Has visited") {
      break;
    }
  }

  // Sum
  tourists[i].stats.sum = 0;
  for (let s = 0; s < tourists[i].expenses.length; s++) {
    tourists[i].stats.sum += tourists[i].expenses[s];
  }

  // Average
  tourists[i].stats.average =
    tourists[i].stats.sum / tourists[i].expenses.length;
}

// The spender
let spender = { name: "", money: 0 };

for (let i = 0; i < tourists.length; i++) {
  tourists[i].stats.sum > spender.money &&
    ((spender.money = tourists[i].stats.sum),
    (spender.name = tourists[i].name));
}

console.log(`The spender is ${spender.name} : ${spender.money}`);
