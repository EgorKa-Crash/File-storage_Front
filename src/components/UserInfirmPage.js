import React, { useEffect, useState } from 'react'
//import AuthentificationService from '../services/AuthentificationService';
import UserService from '../services/UserService';


function UserInfirmPage(props) {


    const [user, setUser] = useState([])

    const [password, setPassword] = useState(() => {
        return {
            password: ""
        }
    })

    function date_time(time) {
        var t = time+' ';
        var t = t.slice(0, -14).replaceAll('T', ' ');
        return t
    }

    function getUserInf() {
        //e.preventDefault(); 
        UserService.getSpecialUser(props.user.userId).then((response) => {
            setUser(response.data[0])
        });
        console.log("заполнение информации о пользователе " + props.user.userId)
        console.log(user)
        console.log(user.login)
        console.log(props.user)
    }

    useEffect(() => {
        getUserInf()
    }, [props.user])

    function drouUser() {
    }

    return (
        <div>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">О пользователе</button> */}


            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRightUser" aria-labelledby="offcanvasRightLabel">

                <div className="offcanvas-body">
 
                    <span class="text-black-50">Логин: </span>  {user.login}  <hr />

                    <span class="text-black-50">ID:</span> {user.userId}  <hr />

                    <span class="text-black-50">Почта: </span>{user.email} <hr />

                    <span class="text-black-50">Ник: </span>{user.nickName} <hr />

                    <span class="text-black-50">Дата регистрации: </span>{date_time(user.created)}  <hr />
                </div>
            </div>
        </div>

    );
}
export default UserInfirmPage