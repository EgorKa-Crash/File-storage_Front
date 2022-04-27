import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'

function UsersDropdown(props) { 

    const [users, setUsers] = useState([])
 

    useEffect(() => { 
        if(props.mainUser.token === ""){
            setUsers([])
            console.log("обнулил список пользоватеей")
        }
        else{
            UserService.getUsers(props.type, props.mainUser.token).then((response) => {
                setUsers(response.data)
                console.log("запрос на список пользователей отправлен")
            });
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
                    //onClick={ e => componentDidMount(e)}
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
                                    <a onClick={(e) => props.getUser(user.userId, e)} className="list-group-item list-group-item-action" >
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