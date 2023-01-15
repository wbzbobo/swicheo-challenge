//Bozheng Wu Swicheo Problem5
import { ethers } from "ethers"
import * as fs from "fs-extra"


const ADDR = "0x5717A1A617A834bc0D4997bf1D0A56b3079d6ef4";   // your contract address
const ABI = fs.readFileSync("./contract.abi", "utf-8");    // your contract ABI

const ADDRESS = "0xf4766FaB78f82E98a4Fa159c1d188a48C39125cD"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x7af963cf6d228e564e2a0aa0ddbf06210b38615d",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);