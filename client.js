const net = require('net');

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
