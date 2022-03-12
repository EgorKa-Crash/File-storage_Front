import axios from 'axios';

const SUBSCRIBERS_REST_API_URL = 'http://localhost:9090/users/subscribers';
const SUBSCRIPTIONS_REST_API_URL = 'http://localhost:9090/users/subscriptions';

class UserService {
    getUsers(users) {
        return axios.get('http://localhost:9090/users/' + users);
    }

    getSubscriptions() {
        return axios.get(SUBSCRIPTIONS_REST_API_URL);
    }

    getFilesOfSpecialUser(user_id) {
        return axios.get('http://localhost:9090/users/'+ user_id);
    }
}


export default new UserService();