export default {
    state: {
        txModal: false,
        txStatus: false,
        statusTx: undefined
    },
    mutations: {
       updateTxModal(state, val) {
           state.txModal = val;
       },
       updatetxStatusModal(state, val) {
           state.txStatus = val;
       },
       updateTx(state, val) {
           state.statusTx = val;
       }
    },
    actions: {},
    getters: {
        txModalGetter(state) {
            return state.txModal;
        },
        txModalStatusGetter(state) {
            return state.txStatus;
        },
        statusTxGetter(state) {
            return state.statusTx;
        }
    }
}