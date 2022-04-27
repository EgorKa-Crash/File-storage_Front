import axios from 'axios';

const SUBSCRIBERS_REST_API_URL = 'http://localhost:9090/users/subscribers';
const SUBSCRIPTIONS_REST_API_URL = 'http://localhost:9090/users/subscriptions';

class UserService {
    getUsers(users, token) {
        // axios.get('http://localhost:9090/users/' + users + token);
        // axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
        // return axios

        //     const requestOptions = { method: 'GET', headers: `Bearer ${token}` };
        // return fetch('http://localhost:9090/users/' + users , requestOptions);


        const requestOptions = { headers: { "Authorization": `Bearer ${token}` } };
        return axios.get('http://localhost:9090/users/' + users, requestOptions);

    }

    getSubscriptions() {
        return axios.get(SUBSCRIPTIONS_REST_API_URL);
    }

    getFilesOfSpecialUser(user_id, token) {
        const requestOptions = { headers: { "Authorization": `Bearer ${token}` } };
        return axios.get('http://localhost:9090/users/' + user_id, requestOptions);
    }
}


export default new UserService();