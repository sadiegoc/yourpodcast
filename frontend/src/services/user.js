import { baseUrl } from "@/config/global";

class User {
    update (data, id, token) {
        return fetch(baseUrl + `/user/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: data
        })
    }
}

export default new User()