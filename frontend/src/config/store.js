import { createStore } from "vuex";

export default createStore({
    state: {
        isMenuVisible: false,
        themeDark: false
    },
    mutations: {
        toggleMenu (state, isVisible) {
            state.isMenuVisible = (isVisible === undefined) ? !state.isMenuVisible : isVisible
        },
        toggleTheme (state) {
            state.themeDark = !state.themeDark
        }
    }
})