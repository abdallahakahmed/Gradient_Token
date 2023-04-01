import {observable, decorate, action} from "mobx";

class ModalStore {
    modal = {
        show : false,
        body : null
    };

    showModal = body => {
        this.modal.show = true,
        this.modal.body = body
    }

    hideModal = body => {
        this.modal.show = false,
        this.modal.body = null
    }

}

export default decorate(ModalStore, {
    modal : observable,
    showModal :  action,
    hideModal : action
})