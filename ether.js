import bip39 from "bip39";
import ethers from "ethers";

const WALLETS_AMOUNT = 2;

let wallets = [];

for (let i = 0; i < WALLETS_AMOUNT; i++) {
  const mnemonic = bip39.generateMnemonic();
  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
  const address = await mnemonicWallet.getAddress();
  const privateKeyHex = mnemonicWallet.privateKey;
  const publicKeyHex = mnemonicWallet.publicKey;
  const walletInfo = {
    mnemonic,
    address,
    publicKeyHex,
    privateKeyHex
  };
  wallets.push(walletInfo);
}

console.log(wallets);
