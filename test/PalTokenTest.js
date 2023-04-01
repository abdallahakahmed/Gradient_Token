const PalToken = artifacts.require("PalToken");

contract("Pal Token ", accounts => {

    it("Should make the first account an owner", async () => {
        let instance = await PalToken.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    });

    it("Test", async () => {
        
    });



});