import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'



function UsersDropdown(props) {

    function getUsersNames() {
        UserService.getUsers(props.type).then((response) => {
            setUsers(response.data)
            //console.log("запрос на список пользователей отправлен")
        });
    }

    // globalVar.callback = () => {
    //     console.log("обновил компонент извне1")
    //     reload()
    // };


    // const memoizedCallback = useCallback(
    //     () => {
    //         console.log("обновил компонент извне1")
    //         reload()
    //     }
    // );


    const [users, setUsers] = useState([])


    useEffect(() => {
        if (props.mainUser.token === "") {
            setUsers([])
            //console.log("обнулил список пользоватеей")
        }
        else { 
            getUsersNames()
        }
    }
        , [props.mainUser.token])


    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + props.users}
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        style={{ backgroundColor: "#c1daff" }}
                        onClick={e => getUsersNames()}
                    >
                        {props.users}
                    </button>
                </h2>
                <div
                    id={props.users}
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                >
                    <div className="list-group list-group-flush">
                        {
                            users.map(
                                user =>
                                    <a onClick={(e) => props.getUser(user.userId, e)}
                                        className="list-group-item list-group-item-action"
                                        key={user.userId} >
                                        {user.nickName}
                                    </a>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
export default UsersDropdown