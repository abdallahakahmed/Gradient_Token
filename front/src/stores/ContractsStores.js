import {observable, decorate, action} from "mobx";
import getGradientContractInstance from "../utils/getGradientContractInstance";

class ContractStore {
    gradientTokenInstance = null;

    setGradientTokenInstance (gradientTokenInstance) {
        this.gradientTokenInstance = gradientTokenInstance;
    }

    async setup() {
        this.setGradientTokenInstance(await getGradientContractInstance());
    }

}

export default decorate(ContractStore, {
    gradientTokenInstance : observable,
    setGradientTokenInstance : action,
});