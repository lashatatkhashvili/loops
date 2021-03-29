//  Check Winner Team

const powerRangers = [85, 54, 41];
const fairyTails = [23, 34, 47];

function calcAverage(array) {
  return (
    array.reduce(function (acc, val) {
      return acc + val;
    }, 0) / array.length
  ).toFixed(2);
}

function checkWinner(firstTeam, secondTeam) {
  let winner = "Draw";

  firstTeam > secondTeam * 2 &&
    (winner = `First team won ${firstTeam} vs ${secondTeam}`);
  secondTeam > firstTeam * 2 &&
    (winner = `Second team won ${secondTeam} vs ${firstTeam}`);

  return winner;
}

const firstAverage = calcAverage(powerRangers);
const secondAverage = calcAverage(fairyTails);

console.log(checkWinner(firstAverage, secondAverage));

// Tip Calculator

let ludovic = {
  accounts: [22, 295, 176, 440, 37, 105, 10, 1100, 96, 52],
};

function calcTip(accounts) {
  return accounts.map(function (account) {
    return account > 50 && account < 300
      ? (account * 15) / 100
      : (account * 20) / 100;
  });
}

ludovic.tips = calcTip(ludovic.accounts);

ludovic.sum = ludovic.accounts.map(function (account, index) {
  return account + ludovic.tips[index];
});

ludovic.tipAverage = calcAverage(ludovic.tips);

ludovic.sumAverage = calcAverage(ludovic.sum);

console.log(ludovic);
