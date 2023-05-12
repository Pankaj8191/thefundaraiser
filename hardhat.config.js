require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: './.env.local'});
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for(const account of accounts)
  {
    console.log(account.address);
  }
})

const privatekey=process.env.NEXT_PUBLIC_PRIVATE_KEY
module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-mumbai.infura.io/v3/0a5dd5afdd9043f3b67d773cfc85ea06",
      accounts: ["933e2564ec0927567b1eb05c502bd6ce3ee6c8b1e7d983e0ce92b19e74690623"]
    }
  }
};
