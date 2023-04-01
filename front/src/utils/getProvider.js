import Web3 from "Web3";

const getProvider = () => {
    return new Web3.providers.HttpProvider("http://127.0.0.1:7545");
}

export default getProvider;