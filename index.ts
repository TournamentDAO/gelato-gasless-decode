import { ethers } from "ethers";
import { EXEC_WITH_SIGS_FACET, GELATO_RELAY_1BALANCE_ERC2771 } from "./abis";

// Sample hashes of transactions using gelato

// Original sender (user): 0x17b135575639A9B55F7EBb74FbED5f727eD08E8a
// Original receiver (contract): 0x90C1F264950a3baD50b0D968c46418194063B263
const TOURNAMENT_MUMBAI_HASH =
  "0xebc226bc7e9ce8a9f623a4a1aa7ea8f5e0aeb12c89d73a1cb185e3258ec7b722";
const NETWORK_HTTPS_URL_POLYGON = "https://polygon-mumbai-bor-rpc.publicnode.com";

// Original sender (user): 0x407F1a8FE09Cb15c995B6dBB2Fb534C0d52c41B4
// Original receiver (contract): 0x2Bab5e29851c6eAf6E415851A9246614aB7C7cb1
const REWARD_CLAIM_BASE_HASH =
  "0x3510113a08aa6ede8fd673cf3b0f3fa4161b0bd00f34ec5724adc809634e88f6";
const NETWORK_HTTPS_URL_BASE = "https://base-sepolia-rpc.publicnode.com";

const main = async () => {
  console.log("Inside main()....")
  let provider = new ethers.JsonRpcProvider(NETWORK_HTTPS_URL_BASE); // Initialize provider (switch between networks by changing the url)

  let execWithSigsFacet = new ethers.Interface(EXEC_WITH_SIGS_FACET);
  let gelatoRelay1BalanceERC2771 = new ethers.Interface(
    GELATO_RELAY_1BALANCE_ERC2771
  );

  let transaction = await provider.getTransaction(REWARD_CLAIM_BASE_HASH); // Change hash here

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
      console.log(`Transaction data for target contract: ${data?.args[0][2]}`);
    }
  }
};

main();
