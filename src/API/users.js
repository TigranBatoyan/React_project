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
};
export default Users
