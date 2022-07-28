import React, { useEffect, useState } from 'react'
import FileService from '../services/FileService'
import TokenProvider from '../services/TokenProvider';
import UserService from '../services/UserService'
import UsersDropdown from './UsersDropdown';

function SubscribeButton(props) {


    const [isSubscribe, setIsSubscribe] = useState([])

    function isSubscriber(subId) {
        UserService.isContainSubscription(TokenProvider.getToken().userId, subId).then((response) => { 
            //console.log("пользователь " + TokenProvider.getToken().userId +" подписан на " +subId+ " и это "+ response.data ); 
            setIsSubscribe(response.data ? "Отписаться" : "Подписаться")
            //return response.data ? "Отписаться" : "Подписаться";
        });
    }

    function subscribe(subId) {
        //window.location.reload(); 
        UserService.subscribe(TokenProvider.getToken().userId, subId).then((response) => { 
            //console.log( response.data ? "Подписался" : "Отписался"); 
            setIsSubscribe(response.data ? "Отписаться" : "Подписаться")
            //UsersDropdown.memoizedCallback()
        });
    }

    // useEffect(() => {
    //     isSubscriber(props.user.userId)
    //   }, [])


    return <> 
        {isSubscriber(props.user.userId)}
        <a href="#" className="btn btn-primary"  onClick={ e => subscribe(props.user.userId)}> 
            {isSubscribe} 
        </a> 
    </>;
}

export default SubscribeButton