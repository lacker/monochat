const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// Listen to stdin for local messages
rl.setPrompt('> ');
rl.prompt();

rl.on('line', (line) => {
  const message = line.trim();

  // TODO: Send the message upstream

  rl.prompt();
}).on('close', () => {
  console.log('Bye.');
  process.exit(0);
});
