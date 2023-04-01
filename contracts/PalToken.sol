// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./ERC721Token.sol";
import "./Ownable.sol";

contract PalToken is ERC721Token, Ownable {

    string public name = "PalToken";
    string public symbol = "Pal";

    struct Pal {
        string outer;
        string inner;
    }

    Pal[] public pals;

    function mint(string memory _outer, string memory _inner) public onlyOwner payable {
        Pal memory newPal = Pal(_outer, _inner);
        pals.push(newPal);
        uint palId = pals.length -1;
        _mint(msg.sender, palId);
    }

    function getPal(uint _palId) public view returns(string memory outer, string memory inner){
        Pal memory _pal = pals[_palId];

        outer = _pal.outer;
        inner = _pal.inner;
    }
}