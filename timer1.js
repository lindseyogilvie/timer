const args = process.argv.slice(2);

let newArgs = [];
for (let arg of args) {
  newArgs.push(Number(arg));
};

const timer = (arr) => {
  for (let i of arr) {
    if (typeof i === "number" && i >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, 1000 * i);
    }
  }
};
  
timer(newArgs);