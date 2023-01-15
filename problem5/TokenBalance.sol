//Bozheng Wu Swicheo Problem5
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

interface ERC20 {
    function balanceOf(address _owner) external view returns (uint256 balance);
}

contract TokenBalance {

    struct Result {
    address token;
    uint256 amount;
}

    function getBalances(address accountAddress, address[] memory tokenAddresses) public view returns (Result[] memory){
        Result[] memory results = new Result[](tokenAddresses.length);
        for(uint256 i = 0; i < tokenAddresses.length; i++){
        ERC20 ERC20Contract = ERC20(tokenAddresses[i]);
        uint256 balance = ERC20Contract.balanceOf(accountAddress);
        results[i] = (Result(tokenAddresses[i], balance));
       }
       return results;
    }
}