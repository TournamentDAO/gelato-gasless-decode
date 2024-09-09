export const EXEC_WITH_SIGS_FACET = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_feeCollector",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "correlationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "service",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "checkerSigner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "LogExecWithSig",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "correlationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "service",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "checkerSigner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "feeToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "LogExecWithSigFeeCollector",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "correlationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "service",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "checkerSigner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "feeToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "LogExecWithSigRelayContext",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "correlationId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "service",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "checkerSigner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "feeToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "LogExecWithSigTrackFee",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXEC_WITH_SIG_FEE_COLLECTOR_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXEC_WITH_SIG_RELAY_CONTEXT_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXEC_WITH_SIG_TRACK_FEE_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXEC_WITH_SIG_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_correlationId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_salt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_vs",
          "type": "bytes32"
        }
      ],
      "name": "execWithSig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_correlationId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_salt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_vs",
          "type": "bytes32"
        }
      ],
      "name": "execWithSigFeeCollector",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_correlationId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_salt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_vs",
          "type": "bytes32"
        }
      ],
      "name": "execWithSigRelayContext",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_correlationId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_salt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isFeeCollector",
          "type": "bool"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_vs",
          "type": "bytes32"
        }
      ],
      "name": "execWithSigTrackFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeCollector",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "simulateExecWithSig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        }
      ],
      "name": "simulateExecWithSigFeeCollector",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "simulateExecWithSigRelayContext",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_service",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_feeToken",
          "type": "address"
        }
      ],
      "name": "simulateExecWithSigTrackFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "estimatedGasUsed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "observedFee",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isFeeCollector",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
export const GELATO_RELAY_1BALANCE_ERC2771 = [{"inputs":[{"internalType":"address","name":"_gelato","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":true,"internalType":"address","name":"feeToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"oneBalanceChainId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nativeToFeeTokenXRateNumerator","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nativeToFeeTokenXRateDenominator","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"correlationId","type":"bytes32"}],"name":"LogUseGelato1Balance","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPONSORED_CALL_ERC2771_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gelato","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"userNonce","type":"uint256"},{"internalType":"uint256","name":"userDeadline","type":"uint256"}],"internalType":"struct CallWithERC2771","name":"_call","type":"tuple"},{"internalType":"address","name":"_sponsor","type":"address"},{"internalType":"address","name":"_feeToken","type":"address"},{"internalType":"uint256","name":"_oneBalanceChainId","type":"uint256"},{"internalType":"bytes","name":"_userSignature","type":"bytes"},{"internalType":"uint256","name":"_nativeToFeeTokenXRateNumerator","type":"uint256"},{"internalType":"uint256","name":"_nativeToFeeTokenXRateDenominator","type":"uint256"},{"internalType":"bytes32","name":"_correlationId","type":"bytes32"}],"name":"sponsoredCallERC2771","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

export const BICONOMY_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"domainValue","type":"bytes"}],"name":"DomainRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"address","name":"relayerAddress","type":"address"},{"indexed":true,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CUSTOM_FORWARD_REQUEST_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_DOMAIN_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FORWARD_REQUEST_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REQUEST_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"domains","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"txGas","type":"uint256"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"},{"internalType":"uint256","name":"batchId","type":"uint256"},{"internalType":"uint256","name":"batchNonce","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ForwardRequestTypesV2.ERC20ForwardRequest","name":"req","type":"tuple"},{"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"executeEIP712","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"ret","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"warning","type":"string"},{"internalType":"string","name":"info","type":"string"},{"internalType":"string","name":"action","type":"string"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"txGas","type":"uint256"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"},{"internalType":"uint256","name":"batchId","type":"uint256"},{"internalType":"uint256","name":"batchNonce","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ForwardRequestTypesV2.ERC20ForwardRequest","name":"request","type":"tuple"}],"internalType":"struct ForwardRequestTypesV2.CustomForwardRequest","name":"req","type":"tuple"},{"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"executeEIP712Custom","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"ret","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"txGas","type":"uint256"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"},{"internalType":"uint256","name":"batchId","type":"uint256"},{"internalType":"uint256","name":"batchNonce","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ForwardRequestTypesV2.ERC20ForwardRequest","name":"req","type":"tuple"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"executePersonalSign","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"ret","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"batchId","type":"uint256"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"}],"name":"registerDomainSeparator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"txGas","type":"uint256"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"},{"internalType":"uint256","name":"batchId","type":"uint256"},{"internalType":"uint256","name":"batchNonce","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ForwardRequestTypesV2.ERC20ForwardRequest","name":"req","type":"tuple"},{"internalType":"bytes32","name":"domainSeparator","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"verifyEIP712","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"txGas","type":"uint256"},{"internalType":"uint256","name":"tokenGasPrice","type":"uint256"},{"internalType":"uint256","name":"batchId","type":"uint256"},{"internalType":"uint256","name":"batchNonce","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ForwardRequestTypesV2.ERC20ForwardRequest","name":"req","type":"tuple"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"verifyPersonalSign","outputs":[],"stateMutability":"view","type":"function"}]