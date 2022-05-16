import {
  Keypair,
  Connection,
  PublicKey,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import {getPayer, getRpcUrl} from './utils';
let connection: Connection;
let payer: Keypair;
let programId: PublicKey;
export async function establishConnection(): Promise<void> {
  const rpcUrl = await getRpcUrl();
  connection = new Connection(rpcUrl, 'confirmed');
  const version = await connection.getVersion();
}
export async function establishPayer(): Promise<void> {
    payer = await getPayer();
  }
export async function sayHello(): Promise<void> {
  const greetedPubkey = new PublicKey("Enter pubkey of the account that has to be passed")
  const instruction = new TransactionInstruction({
    keys: [{pubkey: greetedPubkey, isSigner: false, isWritable: true}],
    programId,
    data: Buffer.alloc(0), 
  });
  await sendAndConfirmTransaction(
    connection,
    new Transaction().add(instruction),
    [payer],
  );
}