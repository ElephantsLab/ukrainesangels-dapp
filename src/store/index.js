import { createStore } from 'vuex'
import store from "./modules/store";
import modals from "./modules/modals";

export default createStore({
    modules: {
        store,
        modals
    }
});