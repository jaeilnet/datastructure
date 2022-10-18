function navieSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length - (short.length - 1); i++) {
    let answer = "";
    for (let j = 0; j < short.length; j++) {
      answer += long[j + i];
    }

    if (answer === short) count++;
  }

  return count;
}

console.log(navieSearch("lorie loled", "l"));
