import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { Message } from './message';
import { sunco } from './service';

const Echoer = sunco.Echoer;

function passThrough(argument) {
  return argument;
}

function main() {
  /* Sanity check using dynamic grpc-js */
  /*
  const PROTO_PATH = __dirname + '/../src/service.proto';
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
  });
  const grpcjsEchoer = grpc.loadPackageDefinition(packageDefinition).sunco as any;
  const GrpcjsEchoer = grpcjsEchoer.Echoer;
  const grpcjsClient = new GrpcjsEchoer('localhost:50051', grpc.credentials.createInsecure());
  grpcjsClient.echo({name:'a', text: 'ping'}, (err, response) => {
    console.log('>>>grpcjs request worked', response);
  });
  */

  const client = new grpc.Client('localhost:50051', grpc.credentials.createInsecure());

  const rpcImpl = function(method, requestData, callback) {
    // Via https://github.com/protobufjs/protobuf.js/issues/1007#issuecomment-378780758
    const path = '/sunco.Echoer/Echo';
    client.makeUnaryRequest(path, passThrough, passThrough, requestData, callback);
  };
  const echoer = new Echoer(rpcImpl);
  const m = Message.create({name:'andrew', text: 'uhhh does this work'});

  echoer.echo(m, function(err, response) {
      if (err) {
          console.error(err);
      } else if (response) {
        console.log('got response text:', response.text)
      }
  });
}

main();
