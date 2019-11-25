export const getUsers = () => {
    const url='https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/';
    const endpoint='users';
    const endpoint2='postblog';

    const $ = selector =>  document.querySelector(selector)


    //users

    const users = () => {
        getUsers( data => {
            fillContentName(data)
        })
    }


    const getUsers =  callback => {
        fetch(`${url}${endpoint}`)
            .then( response => {
                return response.json()
                    .then( data => {
                        return data;
                    });
            })
            .catch( err => {
                console.log("Error", err);
            });
    };

    const fillContentName = response => {
        response.forEach( item => {

            //img
            let photo=document.createElement('img')
            photo.classList.add('avatar')
            photo.setAttribute('src',item.avatar)


            //name
            let name=document.createElement('label')
            name.innerText=item.name;
            name.classList.add('name')


            //mainContent
            let row=document.createElement('div');
            row.appendChild(photo);
            row.appendChild(name);
            row.classList.add('list')

            // content.appendChild(row)
        })
    };

    users()
}