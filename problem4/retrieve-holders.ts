//Bozheng Wu Swicheo Problem4
import { ethers } from "ethers"
import * as fs from "fs-extra"

async function main(){
    const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
    const abi = fs.readFileSync("./contract.abi", "utf-8");
    const contract = new ethers.Contract("0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468", abi, provider);
    const addresses = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"];
    for(let i = 0; i < addresses.length; i++){
        let result = await contract.balanceOf(addresses[i]);
        console.log(`${addresses[i]} ${result.toString()}`);
    }
}

main().then(() => process.exit(0)).catch(
    (error) =>{
        console.error(error);
        process.exit(1);
    });