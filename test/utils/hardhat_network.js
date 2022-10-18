const hre = require("hardhat");

async function impersonateAccount(acctAddress) {
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [acctAddress],
  });
  return await hre.ethers.getSigner(acctAddress);
}

//todo 对Hardhat network methods 的封装

// await network.provider.send("hardhat_dropTransaction", [txHash]);
// await network.provider.send("evm_setAutomine", [false]);
// await network.provider.send("evm_setIntervalMining", [5000]);


// https://hardhat.org/hardhat-network/reference/
// todo 对JSON-RPC methods support 的封装


module.exports = {
  impersonateAccount
};
