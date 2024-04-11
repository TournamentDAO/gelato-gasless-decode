import { ethers } from "ethers";
import { EXEC_WITH_SIGS_FACET, GELATO_RELAY_1BALANCE_ERC2771 } from "./abis";

// Sample hashes of transactions using gelato

// Original sender (user): 0x17b135575639A9B55F7EBb74FbED5f727eD08E8a
// Original receiver (contract): 0x90C1F264950a3baD50b0D968c46418194063B263
const TOURNAMENT_MUMBAI_HASH =
  "0xebc226bc7e9ce8a9f623a4a1aa7ea8f5e0aeb12c89d73a1cb185e3258ec7b722";
const NETWORK_HTTPS_URL_POLYGON =
  "https://polygon-mumbai-bor-rpc.publicnode.com";

// Transaction type 1 = quest reward claim (base)
// Chain = BASE MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xb667dc10332cbc1abbd6c6815b6474b216dcad4e
// Original receiver (contract): 0x546c3B8717a7F1C7f202cE2D01180a53701ff2ed
//https://basescan.org/tx/0xd825ebc51083160dc74aeb5d1349833105c2102ae57989b0eb0f71995ffb67f9
// const TX_HASH =
//   "0xd825ebc51083160dc74aeb5d1349833105c2102ae57989b0eb0f71995ffb67f9";
// const NETWORK_HTTPS_URL = "https://base-mainnet.public.blastapi.io";

// Transaction type 2 = tournament reward claim (base)
// Chain = BASE MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xb667dc10332cbc1abbd6c6815b6474b216dcad4e
// Original receiver (contract): 0xc6d17e28eC1dfcC76eeA9979a96E2bB79885e382
//https://basescan.org/tx/0x25fc920f82220eb9214c46466df6f0d20623237667f5f2fa545a739fb462d580
// const TX_HASH =
//   "0x25fc920f82220eb9214c46466df6f0d20623237667f5f2fa545a739fb462d580";
// const NETWORK_HTTPS_URL = "https://base-mainnet.public.blastapi.io";

// Transaction type 2 = tournament reward claim (polygon)
// Chain = Polygon MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xc566db260904c3cf05883068c662114ba6b6890c
// Original receiver (contract): 0xa5A5eb469d3B20992aF140a391d74A0BB6863d0b
//https://polygonscan.com/tx/0x61290c5e323b43a7e0f7b8671ceb28ceb4e05e105ed5afd9c986a7d44c41efd2
// const TX_HASH =
// "0x61290c5e323b43a7e0f7b8671ceb28ceb4e05e105ed5afd9c986a7d44c41efd2";
// const NETWORK_HTTPS_URL = "https://gateway.tenderly.co/public/polygon";

// Transaction type 3 = tournament create (base)
// Chain = Polygon MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xb667dc10332cbc1abbd6c6815b6474b216dcad4e
// Original receiver (contract): 0xc6d17e28eC1dfcC76eeA9979a96E2bB79885e382
//https://basescan.org/tx/0x3421eb72ddbb2529a90039e3619a1ec734cac50283b446efa6937e93c07ea084
// const TX_HASH =
//   "0x3421eb72ddbb2529a90039e3619a1ec734cac50283b446efa6937e93c07ea084";
// const NETWORK_HTTPS_URL = "https://base-mainnet.public.blastapi.io";

// Transaction type 3 = tournament create (polygon)
// Chain = Polygon MAINNET
// Decoding transaction should provide these results:
// Original sender (user): 0xb667dc10332cbc1abbd6c6815b6474b216dcad4e
// Original receiver (contract): 0xa5A5eb469d3B20992aF140a391d74A0BB6863d0b
// https://polygonscan.com/tx/0xa73540742bea6fdd838f41ea6c361e3a876d8bf985b55dfa86d81e823298e2e9
const TX_HASH =
  "0xa73540742bea6fdd838f41ea6c361e3a876d8bf985b55dfa86d81e823298e2e9";
const NETWORK_HTTPS_URL = "https://gateway.tenderly.co/public/polygon";

const main = async () => {
  console.log("Inside main()....");
  let provider = new ethers.JsonRpcProvider(NETWORK_HTTPS_URL); // Initialize provider (switch between networks by changing the url)

  let execWithSigsFacet = new ethers.Interface(EXEC_WITH_SIGS_FACET);
  let gelatoRelay1BalanceERC2771 = new ethers.Interface(
    GELATO_RELAY_1BALANCE_ERC2771
  );

  let transaction = await provider.getTransaction(TX_HASH); // Change hash here

  if (transaction != null) {
    let decodedInput = execWithSigsFacet.parseTransaction({
      data: transaction.data,
      value: transaction.value,
    });
    if (decodedInput != null) {
      let data = gelatoRelay1BalanceERC2771.parseTransaction({
        data: decodedInput.args[2],
        value: 0,
      });
      console.log(`Chain Id: ${data?.args[0][0]}`);
      console.log(`Contract Address: ${data?.args[0][1]}`);
      console.log(`User Address: ${data?.args[0][3]}`);
      // console.log(`Transaction data for target contract: ${data?.args[0][2]}`);
    }
  }
};

main();
