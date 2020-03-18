const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 8180 });

ws.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
  	//var filtered = message.toString().replace(/([^a-z0-9]+)/gi, '');
  	var filtered = message.toString().replace(/[^\x20-\x7E]/g, '');
    console.log('received: %s', filtered);
  });

  ws.send(126124);
});

ws.on('close', function disconnect(reasonCode, description)
{
	console.log('Disconnect');
});