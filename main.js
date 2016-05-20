const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyBdcfWpyvzuSEyS03M6RAIcbneQKkINOHw",
  authDomain: "project-8181368540383796399.firebaseapp.com",
  databaseURL: "https://project-8181368540383796399.firebaseio.com",
  storageBucket: "project-8181368540383796399.appspot.com",
};
firebase.initializeApp(config);


// Listen to stdin for local messages
rl.setPrompt('> ');
rl.prompt();

rl.on('line', (line) => {
  const message = line.trim();

  // Send the message upstream
  firebase.database().ref('chats').push({
    message: message,
  });

  rl.prompt();
}).on('close', () => {
  console.log('Bye.');
  process.exit(0);
});
