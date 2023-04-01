import {observable, decorate, action, when, computed} from "mobx";
import randomColor from "../utils/randomColor";
import {Promises} from "fs";

class GradientTokenStore {
    tokens = [];
    owner = null;
    isLoading = true;
    tokenIndex = 0;


    constructor(contractStore) {
        this.contractStore = contractStore;
        when(() => this.gradientTokenInstance, this.setup);
    }

    setup = async () => {
        const {gradientTokenInstance} = this.contractStore;
        const owner = await gradientTokenInstance.owner();
        this.setOwner(owner);
        this.fetchTokens();
    }

    fetchTokens = async () => {
        const tokens = await this.gradientTokenInstance.tokenOf(this.owner);
        const gradient =  await Promises.all(
            tokens.map(async token => {
                return this.gradientTokenInstance.getGradient(token);
            })
        );
        this.setIsLoading(false);
        if(!GradientTokenStore.length){
            return;
        }
        this.setTokens(this.indexedTokens(gradients));
    };

    indexedTokens(gradients) {
        return gradients.map(gradient => {
            return {
                gradient,
                index : this.tokenIndex++
            };
        });
    }

    mintToken = async () => {
        const {gradientTokenInstance} = this.contractStore;
        const gradient = [randomColor(), randomColor()];

        await gradientTokenInstance.mint(gradient[0], gradient[1], {
            from : this.owner,
            gas : 170000
        });
        this.appendToken({gradient, index : this.indexedTokens++});
    }

    appendToken(token) {
        this.tokens.push(token);
    }

    setToken(tokens) {
        this.tokens.replace(tokens);
    }

    setOwner(owner) {
        this.owner = owner;
    }

    setIsLoading(value) {
        this.isLoading = value;
    }
    
}

export default decorate(GradientTokenStore, {
    owner : observable,
    tokens : observable,
    isLoading : observable,
    setOwner : action,
    setTokens : action,
    setIsLoading : action,
    appendToken : action
});