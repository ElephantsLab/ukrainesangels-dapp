export default {
    state: {
        txModal: false,
        txStatus: false,
        statusTx: undefined,
        txFailed: false,
        revertReason: undefined
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
       },
       updateTxFailed(state, val) {
           state.txFailed = val;
       },
       updateRevertReason(state, val) {
           state.revertReason = val;
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
        },
        txFailedGetter(state) {
            return state.txFailed;
        },
        revertReasonGetter(state) {
            return state.revertReason;
        }
    }
}