import {endpoint_blog, url} from "../Costants/costants";

class Posts{
    getPosts(){
      return fetch(`${url}${endpoint_blog}`)
            .then(response => {
                if (response.ok && response.status === 200) {
                    return response.json()
                }
            }).catch(err => {
            console.log('Error', err)
        })
    }

    addPost(data){
        return fetch(`${url}${endpoint_blog}`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }
}
export default Posts