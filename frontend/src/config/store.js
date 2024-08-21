import axios from "axios";
import { createStore } from "vuex";
import { userKey } from "./global";

export default createStore({
    state: {
        isMenuVisible: false,
        themeDark: true,
        user: JSON.parse(localStorage.getItem(userKey))
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
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        }
    }
})