import { Message } from './message';

console.log(Message.verify({name: 42}));

const m = Message.create({text: 'uhhh does this work'});

console.log('>>>', Message.encode(m).finish());
console.log('>>>', Message.toObject(m))

function handle(m: Message): string {
    console.log(`${m.name} said ${m.text})`);
    return m.name
}

// console.banana('lol');
console.log('>>>', handle(m));
