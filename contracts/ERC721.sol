// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

abstract contract ERC721 {
    event Transfer(address indexed _from, address indexed _to, uint _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint _tokenId);

    function balanceOf(address _owner) public view virtual returns(uint _balance);
    function ownerOf(uint _tokenId) public view virtual returns(address _owner){}
    // function transfer(address _to, uint _tokenId) public virtual;
    // function approve(address _to, uint _tokenId) public virtual;

}