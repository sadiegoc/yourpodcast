import http from "./http";

class Auth {
    register (user) {
        return http.post('/signup', user)
    }

    login (user) {
        return http.post('/signin', user)
    }
}

export default new Auth()