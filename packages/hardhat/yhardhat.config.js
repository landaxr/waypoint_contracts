const { infuraRinkeby, rinkebyKey } = require('./access_keys');

require('@nomiclabs/hardhat-waffle');

// // Go to https://www.alchemyapi.io, sign up, create
// // a new App in its dashboard, and replace "KEY" with its key
// const ALCHEMY_API_KEY = "KEY";

// // Replace this private key with your Goerli account private key
// // To export your private key from Metamask, open Metamask and
// // go to Account Details > Export Private Key
// // Be aware of NEVER putting real Ether into testing accounts
// const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: infuraRinkeby,
      accounts: [rinkebyKey],
    },
  },
};
