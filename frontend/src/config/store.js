import { createStore } from "vuex";

export default createStore({
    state: {
        isMenuVisible: false
    },
    mutations: {
        toggleMenu (state, isVisible) {
            state.isMenuVisible = (isVisible === undefined) ? !state.isMenuVisible : isVisible
        }
    }
})