import img from './components/img/Screenshot_552.jpg'; 
import UsersDropdown from './components/UsersDropdown';
import SearchString from './components/SearchString';
import UserFiles from './components/UserFiles';
import NavBarComponent from './components/NavBarComponent';

import React, { useEffect, useState } from 'react'
import UserService from './services/UserService'
import TokenProvider from './services/TokenProvider';
 

 

function App() {

  const [users, setUsers] = useState([])
  //const [mainUser, setMainUser] = useState([])

  const [mainUser, setMainUser] = useState(() => {
    return {
      token: "",
      login: "",
      nickName: ""
    }
  })

  function setMainUserF(user) {
    setMainUser(user);
    return mainUser;
  }

  function myFiles(e) {
    e.preventDefault(); 
    setUsers([]);
    UserService.getSpecialUser(mainUser.userId).then((response) => {
      setUsers(response.data)
    });
  }

  function mainPageFiles(e) {
    e.preventDefault(); 
    UserService.getSubscriptions().then((response) => {
      setUsers(response.data)
    });
  }
 
  function getFilesOfSpecialUser(user_id, e) {
    e.preventDefault();
    UserService.getSpecialUser(user_id).then((response) => {
      setUsers(response.data)
    });
  }
 
  useEffect(() => {
    if (mainUser.token === "") {
      var newObject2 = TokenProvider.getToken();
      setMainUser(newObject2)
      setUsers([])
    } else {
      TokenProvider.setToken(mainUser);
      UserService.getSpecialUser(mainUser.userId).then((response) => {
        setUsers(response.data)
      });
    }
  }, [mainUser.token])

  
  return (
    <div style={{ backgroundColor: "#f6f6f6", minHeight: 1050 }}>
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
          <NavBarComponent mainPageFiles={mainPageFiles} myFiles={myFiles} mainUser={mainUser} setMainUser={setMainUserF} />
          <div className="col-md-3 p-2" style={{ backgroundColor: "#fff", minHeight: 900 }}>
            <SearchString getUser={getFilesOfSpecialUser} />
            <div className="accordion m-2" id="accordionPanelsStayOpenExample">
              <UsersDropdown users='Подписчики' type='subscribers' mainUser={mainUser} getUser={getFilesOfSpecialUser} />
              <UsersDropdown users='Подписки' type='subscriptions' mainUser={mainUser} getUser={getFilesOfSpecialUser} />
            </div>
          </div>
          <div
            className="col-md-9 p-2 row-cols-auto"
            style={{ backgroundColor: "#fff" }}
          >
            <UserFiles mainUserId={mainUser.userId} myFiles={myFiles} users={users}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
