const net = require('net');
// const stdin = process.stdin;

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
});

conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write('Name: UNO');

  // const up = stdin.on('data', (w) => {
  //   process.stdout.write('Move: up');
  // });

  // setInterval(() => conn.write('Move: up'), 1000);
  // setInterval(() => conn.write('Move: down'), 1000);
  // setInterval(() => conn.write('Move: left'), 1000);
  // setInterval(() => conn.write('Move: right'), 1000);

});

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

 // client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
}); 

  return conn;
}

// console.log('Connecting ...');
// connect();

module.exports = {connect};
