/* The difference between hardhat and remix
    is that you call functions using javascript
    in hardhat instead of buttons. */

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compiles the contract
    const waveContract = await waveContractFactory.deploy(); // Deploys contract into a fresh blockchain
    await waveContract.deployed(); // calls waveContract variable when contract gets deployed.
    
    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    await waveContract.getTotalWaves();

    const firstWaveTxn = await waveContract.wave();
    await firstWaveTxn.wait();

    await waveContract.getTotalWaves();

    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait();

    await waveContract.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    }   catch (error) {
        console.log(error); // exit Node process while indicating 'Uncaught Fatal Exception' error
        process.exit(1);
    }
};

runMain();