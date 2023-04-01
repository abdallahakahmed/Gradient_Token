import contract from "truffle-contract";
import getProvider from "./getProvider";
import PalTokenArtifact from "contracts/PalToken.json";
import addresses from "../addresses.json";

const {tokenAddress} = addresses;

export default async function getGradientContractInstance() {
    const gradientTokenContract =  contract(PalTokenArtifact);
    gradientTokenContract.setProvider(getProvider());
    const gradientTokenInstance = await gradientTokenContract.at(tokenAddress);
    return gradientTokenInstance;
}