import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import UserService from '../services/UserService'
 

function SearchUserComponent() {

    const [users, setUsers] = useState([])
    const [value, setValue] = useState("")

    async function fetchPersons(e) { // 
        e.preventDefault();
        const response = await axios.get('http://localhost:9090/users/searchBar?searchBar=' + value);
        console.log(value)
        setUsers(response.data)
    }

    // useEffect(() => {
    //    fetchPersons();
    //     //console.log("первая отработка")
    // }, [value])

    useEffect(() => {
        fetchPersons();
         //console.log("первая отработка")
     }, [])
 

    return (
        <div> 
            <div>
                <form className="d-flex m-2 ">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className="btn btn-outline-success" onClick={fetchPersons}>
                        Search
                    </button>
                </form>
            </div>
            <div className="list-group   m-2 ">
                <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                >
                    {
                        users.length !== 0
                            ? <div>Search results</div>
                            : <div>No users found</div>
                    }
                </a>

                { 
                    users.map(
                        user =>
                            <a href="#" className="list-group-item list-group-item-action">
                                {user.nickName}
                            </a>
                    )
                }

            </div>
        </div>
    );
}
export default SearchUserComponent