import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import UserService from '../services/UserService'


function SearchUserComponent(props) {

    const [users, setUsers] = useState([])
    const [value, setValue] = useState("")

    async function fetchPersons(e) { // 
        e.preventDefault();
        const response = await axios.get('http://localhost:9090/users/searchBar?searchBar=' + value);
        console.log(value)
        setUsers(response.data)
    }
 

    useEffect(() => {
        fetchPersons(); 
    }, [])


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
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className="btn btn-outline-success" onClick={fetchPersons}>
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
                            : <div>Ничего не найдено</div>
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