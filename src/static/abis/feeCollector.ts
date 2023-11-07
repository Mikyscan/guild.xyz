const feeCollectorAbi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "guildTreasury_",
        type: "address",
      },
      { internalType: "uint256", name: "totalFeeBps_", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "vaultId", type: "uint256" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    name: "AlreadyPaid",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "recipient", type: "address" }],
    name: "FailedToSendEther",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "vaultId", type: "uint256" },
      { internalType: "uint256", name: "paid", type: "uint256" },
      { internalType: "uint256", name: "requiredAmount", type: "uint256" },
    ],
    name: "IncorrectFee",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
    ],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256", name: "vaultId", type: "uint256" }],
    name: "VaultDoesNotExist",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "key", type: "string" },
    ],
    name: "FeeSchemaAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "GuildTreasuryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint96",
        name: "newShare",
        type: "uint96",
      },
    ],
    name: "TotalFeeBpsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "VaultDetailsChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "VaultRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "vaultId",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "key", type: "string" },
      {
        components: [
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          { internalType: "uint96", name: "feeShareBps", type: "uint96" },
        ],
        internalType: "struct IFeeCollector.FeeShare[]",
        name: "feeShare",
        type: "tuple[]",
      },
    ],
    name: "addFeeSchema",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "key", type: "string" }],
    name: "getFeeSchema",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "treasury",
            type: "address",
          },
          { internalType: "uint96", name: "feeShareBps", type: "uint96" },
        ],
        internalType: "struct IFeeCollector.FeeShare[]",
        name: "schema",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "vaultId", type: "uint256" }],
    name: "getVault",
    outputs: [
      { internalType: "address payable", name: "owner", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "bool", name: "multiplePayments", type: "bool" },
      { internalType: "uint128", name: "fee", type: "uint128" },
      { internalType: "uint128", name: "balance", type: "uint128" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guildTreasury",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "vaultId", type: "uint256" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasPaid",
    outputs: [{ internalType: "bool", name: "paid", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "vaultId", type: "uint256" }],
    name: "payFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "owner", type: "address" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "bool", name: "multiplePayments", type: "bool" },
      { internalType: "uint128", name: "fee", type: "uint128" },
    ],
    name: "registerVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address payable", name: "newTreasury", type: "address" },
    ],
    name: "setGuildTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint96", name: "newShare", type: "uint96" }],
    name: "setTotalFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "vaultId", type: "uint256" },
      { internalType: "address payable", name: "newOwner", type: "address" },
      { internalType: "bool", name: "newMultiplePayments", type: "bool" },
      { internalType: "uint128", name: "newFee", type: "uint128" },
    ],
    name: "setVaultDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalFeeBps",
    outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "vaultId", type: "uint256" },
      { internalType: "string", name: "feeSchemaKey", type: "string" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const

export default feeCollectorAbi
