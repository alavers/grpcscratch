const { Message } = require('./message_pb');
var { StringValue } = require('google-protobuf/google/protobuf/wrappers_pb.js');

const m = new Message();

m.setName('andrew');
m.setText(new StringValue('hello'));
console.log(m.getName());
console.log(m.getText());

console.log(m.toObject());

const binary = m.serializeBinary();
console.log(Message.deserializeBinary(binary).toObject());
