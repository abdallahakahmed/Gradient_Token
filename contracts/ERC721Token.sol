// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./ERC721.sol";
import "./SafeMath.sol";

contract ERC721Token is ERC721 {
    using SafeMath for uint;

    mapping(uint => address) private tokenOwner;
    mapping(address => uint[]) private ownedTokens;

    function _mint(address _to, uint _tokenId) public {
        require(_to != address(0));
        require(tokenOwner[_tokenId] == address(0));

        tokenOwner[_tokenId] = _to;

        ownedTokens[_to].push(_tokenId);

        emit Transfer(address(0), _to, _tokenId);
    }

    function ownerOf(uint _tokenId) public view override returns(address){
        address owner = tokenOwner[_tokenId];
        require(owner != address(0));
        return owner;
    }

    function balanceOf(address _owner) public view override returns (uint _balance) {
        return ownedTokens[_owner].length;
    }

    function tokensOf(address _owner) public view returns(uint[] memory){
        return ownedTokens[_owner];
    }


    // function transfer(address _to, uint _tokenId) public override {}

    // function approve(address _to, uint _tokenId) public override {}
}