//import axios from 'axios';, { useEffect, useState }
import React from 'react'
import Registration from './Registration';


function NavBarComponent(props) {

    // const [users, setUsers] = useState([])
    // const [value, setValue] = useState("")

    // async function fetchPersons(e) { // 
    //     e.preventDefault();
    //     const response = await axios.get('http://localhost:9090/users/searchBar?searchBar=' + value);
    //     console.log(value)
    //     setUsers(response.data)
    // }


    // // useEffect(() => {
    // //    fetchPersons();
    // //     //console.log("первая отработка")
    // // }, [value])

    // useEffect(() => {
    //     fetchPersons();
    //      //console.log("первая отработка")
    //  }, [])


    return (
        <nav
            className="container sticky-top  p-2  "
            style={{ backgroundColor: "#f0f0f0" }}
        >
            <div className="row">
                {/* <div className="col-md-3  ">
                  <form className="d-flex m-2">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div> */}
                <div className="col" />
                <div className="col-md-8 m-2 me-5">
                    <div>
                        <ul className="nav me-auto  justify-content-md-end">
                            <li className="nav-item active ">
                                <a onClick={props.mainPageFiles} className="btn btn-outline-secondary me-2" href="#">
                                    Основная страница
                                </a>
                            </li>
                            <li className="nav-item ">

                                <div className="dropdown">

                                    {
                                        props.mainUser.token == null
                                            ? (
                                                <>
                                                <Registration mainUser={props.mainUser} setMainUser={props.setMainUser}/> 
                                                </> 
                                            )
                                            :
                                            (
                                                <>
                                                    <button
                                                        className="btn btn-secondary dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        {props.mainUser.login} 
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="dropdownMenuButton1"
                                                    >
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={() => props.setMainUser({login: null, token: null})}>
                                                                Выйти 
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                О программе
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Страница админестратора(в разработке)
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </>
                                            )
                                    }



                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default NavBarComponent