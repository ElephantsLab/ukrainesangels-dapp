export default {
    state: {
        txModal: false,
        txStatus: false,
        statusTx: undefined,
        txFailed: false,
        warningModal: false,
        revertReason: undefined,
        walletChooseModal: false,
    },
    mutations: {
        updateTxModal(state, val) {
            state.txModal = val;
        },
        updateWalletChooseModal(state, val) {
            state.walletChooseModal = val;
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
        updateWarningModal(state, val) {
            state.warningModal = val;
        },
        updateRevertReason(state, val) {
            state.revertReason = val;
        },
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
        statusWalletChooseGetter(state) {
            return state.walletChooseModal;
        },
        txFailedGetter(state) {
            return state.txFailed;
        },
        warningModalGetter(state) {
            return state.warningModal;
        },
        revertReasonGetter(state) {
            return state.revertReason;
        },
    },
};
