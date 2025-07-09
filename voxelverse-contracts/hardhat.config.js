require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://polygon-amoy.g.alchemy.com/v2/ToS-yKnpawn1ORRbXbMYB",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};