require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Printst the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address)
  }
});

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);

    console.log(ethers.utils.formatEther(balance), "ETH");
  });


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://patient-dawn-arrow.ethereum-goerli.discover.quiknode.pro/a0c6a0e01e40486fa5c62d4fb0e7b8768496a4a2/",
      accounts: ["0x8d1a793c84a768806af216d03d22bf7fb26504d346f945d29c937d34804c9344"]
    }
  }
};
