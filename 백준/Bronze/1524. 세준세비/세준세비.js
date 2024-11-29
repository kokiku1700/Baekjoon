const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((e) => e.split(" "));

const N = Number(input.shift()[0]);

const answer = [];

for (let i = 0; i < N; i++) {
  let sejun = input[i * 4 + 2].map(Number).sort((a, b) => b - a);
  let sebi = input[i * 4 + 3].map(Number).sort((a, b) => b - a);

  for (
    let j = 0;
    j < Number(input[i * 4 + 1][0]) + Number(input[i * 4 + 1][1]);
    j++
  ) {
    if (sejun[sejun.length - 1] >= sebi[sebi.length - 1]) {
      sebi.pop();
    }
    if (sejun[sejun.length - 1] < sebi[sebi.length - 1]) {
      sejun.pop();
    }
    if (!sejun.length) {
      answer.push("B");
      break;
    }
    if (!sebi.length) {
      answer.push("S");
      break;
    }
  }
  if (!sejun.length && !sebi.length) {
    answer.push("C");
  }
}

console.log(answer.join("\n"));