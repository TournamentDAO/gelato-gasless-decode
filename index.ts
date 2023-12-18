import { ethers } from "ethers";
import { EXEC_WITH_SIGS_FACET, GELATO_RELAY_1BALANCE_ERC2771 } from "./abis";

// Sample hashes of transactions using gelato

// Original sender (user): 0x17b135575639A9B55F7EBb74FbED5f727eD08E8a
// Original receiver (contract): 0x90C1F264950a3baD50b0D968c46418194063B263
const TOURNAMENT_MUMBAI_HASH =
  "0x353b0563ea7f23f44b6347d043e8e6f0963582442c0b453f44a5f3204ea5d5fc";
const NETWORK_HTTPS_URL_POLYGON = "https://rpc-mumbai.maticvigil.com";

// Original sender (user): 0x407F1a8FE09Cb15c995B6dBB2Fb534C0d52c41B4
// Original receiver (contract): 0x2Bab5e29851c6eAf6E415851A9246614aB7C7cb1
const REWARD_CLAIM_BASE_HASH =
  "0xf85fa848d24d7094fdf95f6e0484b9b8a8b43a848730264b34237d99f6d992bc";
const NETWORK_HTTPS_URL_BASE = "https://gateway.tenderly.co/public/base-goerli";

const main = async () => {
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
        data: decodedInput.args["_call"]["msg"]["data"],
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
