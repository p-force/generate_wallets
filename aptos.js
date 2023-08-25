import bip39 from "bip39";
import { AptosAccount } from 'aptos';

const WALLETS_AMOUNT = 2;

let wallets = [];

for (let i = 0; i < WALLETS_AMOUNT; i++) {
	const path = "m/44'/637'/0'/0'/0'";
	const mnemonic = bip39.generateMnemonic();
	const account = AptosAccount.fromDerivePath(path, mnemonic);
	const walletInfo = {
		mnemonic,
		...account.toPrivateKeyObject()
	}
	wallets.push(walletInfo);
}

console.log(wallets);
