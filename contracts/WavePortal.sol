// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] public wavers;

    constructor() {
        console.log("This contract is apparently smart. :)");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved", msg.sender);
        storeWaver(msg.sender);
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function storeWaver(address _waver) public {
        wavers.push(_waver);
    }

    function getWavers() public view {
        console.log("List of wavers:");
        for (uint i = 0; i < wavers.length; i++) {
            console.log(wavers[i]);
        }
    }
}