1. Install [NodeJS](https://nodejs.org/en/download/)
2. Go to project folder and execute `npm i`
3. Enter the amount of wallets you want to generate in WALLETS_AMOUNT in index.js
4. Execute the command `npm run ether` to generate Ethereum wallets or the command `npm run aptos` to generate aptos wallets
5. Generated wallets will be printed in console in such form: 
```
{
  mnemonic,
  address,
  publicKeyHex,
  privateKeyHex
}
```
