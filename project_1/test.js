import {Client, Message} from 'react-native-paho-mqtt';
import * as React from 'react';
import {View, Text} from 'react-native';

//Set up an in-memory alternative to global localStorage
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: key => myStorage[key],
  removeItem: key => {
    delete myStorage[key];
  },
};

// Create a client instance
const client = new Client({
  uri: 'wss://soldier.cloudmqtt.com:31590/wss',
  clientId: 'clientId',
  storage: myStorage,
});

// set event handlers
client.on('connectionLost', responseObject => {
  if (responseObject.errorCode !== 0) {
    console.log(responseObject.errorMessage);
  }
});
client.on('messageReceived', message => {
  console.log(message.payloadString);
});

// connect the client

var options = {
  userName: 'qphxrqlo',
  password: 'vFeIh1tNyQWU',
};

client
  .connect(options)
  .then(() => {
    // Once a connection has been made, make a subscription and send a message.
    console.log('onConnect');
    console.log(client.subscribe('test'));
  })
  //.then(() => {
  //const message = new Message('Hello');
  //message.destinationName = 'World';
  //client.send(message);
  //})
  .catch(responseObject => {
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  });

export default function() {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
}
