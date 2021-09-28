import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import contractInformation from './contract.json'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.4",
  networks: {
    rsk: {
      url: 'https://public-node.testnet.rsk.co',
      chhainId: 31,
      gasPrice: 1000,
      accounts: [contractInformation.deployer.privateKey]
    }
  }
};
