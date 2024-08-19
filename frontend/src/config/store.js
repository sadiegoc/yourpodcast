import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
        isMenuVisible: false,
        themeDark: true,
        user: null
    },
    mutations: {
        toggleMenu (state, isVisible) {
            state.isMenuVisible = (isVisible === undefined) ? !state.isMenuVisible : isVisible
        },
        toggleTheme (state) {
            state.themeDark = !state.themeDark
        },
        setUser (state, user) {
            state.user = user
            if (user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})