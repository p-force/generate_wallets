<div align="center">
<h1>Ethereum and Aptos Wallet Generator</h1>

</div>

This project allows you to generate Ethereum and Aptos wallets using NodeJS.

# Installation and Setup
1. Install Node.js - Make sure Node.js is installed on your machine.

2. Install Dependencies - Navigate to the project folder and run:

```bash
npm i
```
3. Set Wallet Quantity - Open ```index.js``` and set the number of wallets you want to generate by changing the ```WALLETS_AMOUNT``` variable.

# Generating Wallets
- To generate Ethereum wallets, run:

```bash
npm run ether
```
- To generate Aptos wallets, run:

```bash
npm run aptos
```

# Output
Generated wallets will be displayed in the console with the following structure:

```
{
  mnemonic: "your mnemonic phrase",
  address: "wallet address",
  publicKeyHex: "public key in hex format",
  privateKeyHex: "private key in hex format"
}
```
