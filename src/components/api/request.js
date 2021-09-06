import axios from "axios";
//GET POST REQUEST
function getAll() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(res => console.log(res))
        .catch(err => console.log(err));
}