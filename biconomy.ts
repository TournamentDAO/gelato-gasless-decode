
import { ethers } from "ethers";
import { BICONOMY_ABI } from "./abis";

// Transaction type 4 = Spin the wheel (mantle)
// Chain = MANTLE MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xB667dc10332cbC1AbBd6c6815b6474b216DcAd4e
// Original receiver (contract): 0x4990D27658070dD1f1a0CDD7411C3567676352A6
// https://rpc.mantle.xyz

// Transaction type 5 = Spin the wheel (mantle)
// Chain = MANTLE MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xB667dc10332cbC1AbBd6c6815b6474b216DcAd4e
// Original receiver (contract): 0xe459e1f4f14a9f8b71034deb69bdd7a7f9267d7c
// https://rpc.mantle.xyz


const TOURNAMENT_TX_HASH =
  "0x1935871aae1dcfb4bc418e3993b9daba6e178d56f0f6af326d741b0c71f36e81";
const SPIN_TX_HASH = "0x843e7d5aaa76a4e08cd5797deeadc3a1996bac39be5e27c10cdfa1bd1a24ba36"  
const NETWORK_HTTPS_URL = "https://rpc.mantle.xyz";

export const biconomyMain = async () => {
  console.log("Inside Biconomy main()....");

  let provider = new ethers.JsonRpcProvider(NETWORK_HTTPS_URL); // Initialize provider (switch between networks by changing the url)

  let biconomyInterface = new ethers.Interface(BICONOMY_ABI)

  let transaction = await provider.getTransaction(TOURNAMENT_TX_HASH); // Change hash here

  if (transaction != null) {
    let decodedInput = biconomyInterface.parseTransaction({
      data: transaction.data,
      value: transaction.value,
    });
    if (decodedInput != null) {
      //Biconomy Decoding
      console.log(decodedInput,"decodedInput")
      console.log(`Contract Address: ${decodedInput?.args[0][1]}`);
      console.log(`Transaction data for target contract: ${decodedInput?.args[0][8]}`);
    }
  }
};