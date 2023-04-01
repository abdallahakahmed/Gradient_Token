import ContractsStores from "./ContractsStores";
import GradientTokenStore from "./GradientTokenStore";
import ModalStore from "./ModalStore";

const modalStore = new ModalStore();

const contractsStore = new ContractsStores();
contractsStore.setup();

const gradientTokenStore = new GradientTokenStore(contractsStore);

export default {
    modalStore,
    contractsStore,
    gradientTokenStore
}