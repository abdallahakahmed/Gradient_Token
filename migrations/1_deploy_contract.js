var PalToken = artifacts.require("./PalToken.sol");

module.exports = function(deployer) {
    deployer.deploy(PalToken);
}