const CampaignFactory = require("./artifacts/contracts/Campaign.sol/CampaignFactory.json");
const Campaign = require("./artifacts/contracts/Campaign.sol/Campaign.json");
const { ethers } = require("ethers");
require("dotenv").config({ path: "./env.local" });

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
       'https://polygon-mumbai.infura.io/v3/0a5dd5afdd9043f3b67d773cfc85ea06'
    );

    const contract = new ethers.Contract(
        '0x8761cC2B453E7B7b03f9028A2613e82c4A8A1476',
      CampaignFactory.abi,
      provider
    );

    const getDeployedCampaign = contract.filters.campaignCreated();
    let events = await contract.queryFilter(getDeployedCampaign);
    let event = events.reverse();
    console.log(event);
};

main();