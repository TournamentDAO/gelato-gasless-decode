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
