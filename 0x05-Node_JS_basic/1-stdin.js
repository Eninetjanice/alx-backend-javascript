// This program gets user data & prints it to STDIN

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const inputData = process.stdin.read();

  if (inputData) {
    process.stdout.write(`Your name is: ${inputData}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
