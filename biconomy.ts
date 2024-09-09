
import { ethers } from "ethers";
import { BICONOMY_ABI, EXEC_WITH_SIGS_FACET, GELATO_RELAY_1BALANCE_ERC2771 } from "./abis";

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


const TX_HASH =
  "0xa0a6c778793f45dd315161f75137c96585cb93a2d67aceda3a789336914b53fd";
const NETWORK_HTTPS_URL = "https://rpc.mantle.xyz";

export const biconomyMain = async () => {
  console.log("Inside Biconomy main()....");

  let provider = new ethers.JsonRpcProvider(NETWORK_HTTPS_URL); // Initialize provider (switch between networks by changing the url)

  let biconomyInterface = new ethers.Interface(BICONOMY_ABI)

  let transaction = await provider.getTransaction(TX_HASH); // Change hash here

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