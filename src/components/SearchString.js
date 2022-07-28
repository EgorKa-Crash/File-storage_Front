import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
//import UserService from '../services/UserService'


function SearchUserComponent(props) {

    const [users, setUsers] = useState([])
    const [value, setValue] = useState("")
//async
     function fetchPersons(e) { // 
        e.preventDefault();
        if (value.length !== 0) {
            UserService.getSearchUsers(value).then((response) => {
                setUsers(response.data)
            });
        } else {
            setUsers([])
        }
    }


    // useEffect(() => {
    //     fetchPersons();
    // }, [])//value 

    return (
        <div>
            <div>
                <form className="d-flex m-2 ">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Поиск"
                        aria-label="Search"
                        value={value}
                        //onChange={event => fetchPersons(event)}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className="btn btn-outline-success" onClick={e => fetchPersons(e)}>
                        Искать
                    </button>
                </form>
            </div>

            <div className="list-group m-2">
                <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                >
                    {
                        users.length !== 0
                            ? <div>Результаты поиска:</div>
                            : <div>Поиск пользователей</div>
                        //: (value.length !== 0?
                        //<div>Ничего не найдено</div>
                        //:<div>Поиск пользователей</div>)
                    }
                </a>
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
    );
}
export default SearchUserComponent