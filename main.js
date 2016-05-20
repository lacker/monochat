const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyBj2jKu2q1ggkwhjr5vtSISBkUB5FTiWU0",
  authDomain: "monochat2.firebaseapp.com",
  databaseURL: "https://monochat2.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);


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
