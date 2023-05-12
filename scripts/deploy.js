const hre = require('hardhat');
  
async function main() {
    const [deployer] = await ethers.getSigners();

  const campaignFactoryArtifact = await hre.ethers.getContractFactory('contracts/Campaign.sol:CampaignFactory');
  const campaignFactory = await campaignFactoryArtifact.deploy();

  await campaignFactory.deployed();

  console.log('Factory deployed to:', campaignFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
