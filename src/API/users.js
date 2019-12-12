import {endpoint_user, url} from "../Costants/costants";

class Users {
    getUsers() {
        return fetch(`${url}${endpoint_user}`)
            .then(response => {
                return response.json()
            })
    }

    loginHandler(data) {
        return fetch(`${url}${endpoint_user}/login`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    registerHandler(data) {
        return  fetch(`${url}${endpoint_user}`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

    getById(id){
        return fetch(`${url}${endpoint_user}/${id}`)
    }

    getPostsById(id){
        return fetch(`${url}${endpoint_user}/${id}/posts`)
    }
};
export default Users
