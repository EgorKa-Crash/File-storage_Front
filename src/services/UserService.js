import axios from 'axios';
import TokenProvider from './TokenProvider';

const SUBSCRIBERS_REST_API_URL = 'http://localhost:9090/users/subscribers';
const SUBSCRIPTIONS_REST_API_URL = 'http://localhost:9090/users/subscriptions';

class UserService {
    getUsers(users) {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get('http://localhost:9090/users/' + users, requestOptions);
    }

    getSubscriptions() {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get(SUBSCRIPTIONS_REST_API_URL, requestOptions);
    }

    getSpecialUser(user_id) {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get('http://localhost:9090/users/' + user_id, requestOptions);
    }

    getSearchUsers(value) {
        const requestOptions = TokenProvider.getRequestOptions();
        return axios.get('http://localhost:9090/users/searchBar?searchBar=' + value, requestOptions);
    }

    isContainSubscription(userId, subId) {
        const requestOptions = TokenProvider.getRequestOptions();
        const subskr = {
            userId: userId,
            subId: subId
        }
        //return axios.post('http://localhost:9090/users/isSubscriber/',requestOptions, subskr ); 

        // return axios({
        //     method: 'post',
        //     url: 'http://localhost:9090/users/isSubscriber/',
        //     data: subskr,
        //     headers: requestOptions 
        // });

        return axios.post( 
            'http://localhost:9090/users/isSubscriber/',
            subskr,
            requestOptions
          ); 
    }

    subscribe(userId, subId) {
        const requestOptions = TokenProvider.getRequestOptions();
        const subskr = {
            userId: userId,
            subId: subId
        }
        // console.log(JSON.stringify(subskr))
        // return axios({
        //     method: 'post',
        //     url: 'http://localhost:9090/users/subscribe/',
        //     data: subskr,
        //     headers: requestOptions,
            
        // });

        return axios.post( 
            'http://localhost:9090/users/subscribe/',
            subskr,
            requestOptions
          ); 
    }
}


export default new UserService();