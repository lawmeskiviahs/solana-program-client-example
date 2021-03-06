import {
  establishConnection,
  establishPayer,
  sayHello,
} from './hello_world';

async function main() {
  console.log("Let's say hello to a Solana account...");
  await establishConnection();
  await establishPayer();
  await sayHello();
  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
