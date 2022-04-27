import img from './components/img/Screenshot_552.jpg'; 
import UserComponent from './components/UserComponent';
import UsersDropdown from './components/UsersDropdown';
import SearchString from './components/SearchString';
import UserFiles from './components/UserFiles';
import NavBarComponent from './components/NavBarComponent';

import React, { useEffect, useState } from 'react'
import UserService from './services/UserService'

function App() {

  const [users, setUsers] = useState([])
  const [mainUser, setMainUser] = useState([])

  function setMainUserF(user) {
    //e.preventDefault();
    setMainUser(user);
    console.log("вообще тут перезапись выполняется" + user.token)
    //return mainUser;
  }
   

  function mainPageFiles(e) {
    e.preventDefault();
    UserService.getSubscriptions().then((response) => {
      setUsers(response.data)
    }); 
  }
 
  async function getFilesOfSpecialUser(user_id, e) {
    e.preventDefault();
    UserService.getFilesOfSpecialUser(user_id).then((response) => {
      setUsers(response.data)
    });
  }


  useEffect(() => {
    UserService.getSubscriptions().then((response) => {
      setUsers(response.data)
    });
    //mainPageFiles;
    //getFilesOfSpecialUser(23);
  }, [])


  {/* <div className="container">
        <div className="row justify-content-center"> 
           <UserComponent />
          <UsersDropdown users='subscribers' />
          <UsersDropdown users='subscriptions' />
          <SearchString /> 
          <UserFiles mainUserId={2}/>

        </div>
      </div>  */}

  return (
    <div style={{ backgroundColor: "#f6f6f6" ,minHeight: 1050}}>
      <title>Bootatraaap</title>

      <div className="container"  >
        <div className="row justify-content-center"   >
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${img})`,
              height: 60,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "top center"
            }}
          >
            <div className="text-white">
              <h1 className="ms-4 ">Filer</h1>
            </div>
          </div>
          {/* <NavBarComponent mainPageFiles={mainPageFiles}/> */}
          <NavBarComponent mainPageFiles={mainPageFiles} mainUser={mainUser} setMainUser={setMainUserF}/> 
          <div className="col-md-3 p-2" style={{ backgroundColor: "#fff" ,minHeight: 900}}>
            <SearchString getUser={getFilesOfSpecialUser} />
            <div className="accordion m-2" id="accordionPanelsStayOpenExample"> 
              <UsersDropdown users='Подписчики' type='subscribers' getUser={getFilesOfSpecialUser} />
              <UsersDropdown users='Подписки' type='subscriptions' getUser={getFilesOfSpecialUser} />
            </div>
          </div>
          <div
            className="col-md-9 p-2 row-cols-auto"
            style={{ backgroundColor: "#fff" }}
          >
            <UserFiles mainUserId={2} users={users} /> 
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
