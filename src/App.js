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
  //const [mainUser, setMainUser] = useState([])

  const [mainUser, setMainUser] = useState(() => {
    return {
        token: "",
        login: ""
    }
})

  function setMainUserF(user) {
    //e.preventDefault();
    setMainUser(user);
    // console.log("вообще тут перезапись выполняется" + user.token)
    // localStorage.setItem('token', mainUser.token)
    // localStorage.setItem('login', mainUser.login)

    //localStorage.setItem("mainUser", JSON.stringify(mainUser.token));
    //var newObject2 = JSON.parse(localStorage.getItem("mainUser"));
    //console.log(newObject2) // 10
    //console.log("токен юзера "+mainUser.token) //
    //localStorage.setItem("test2", JSON.stringify(testObject));
    //console.log("записали в локал сторидж " + JSON.parse(localStorage.getItem('token')).token)
    // console.log("записали в локал сторидж " + JSON.parse(localStorage.getItem('token')))
    return mainUser;
  }



  function mainPageFiles(e) {
    e.preventDefault();
    UserService.getSubscriptions().then((response) => {
      setUsers(response.data)
    });
  }

  async function getFilesOfSpecialUser(user_id, e) {
    e.preventDefault();
    UserService.getFilesOfSpecialUser(user_id, mainUser.token).then((response) => {
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


  useEffect(() => {
 
    if (mainUser.token === "") {
      var newObject2 = JSON.parse(localStorage.getItem("mainUser"));
      //console.log(newObject2.a.token)  
      console.log("++++++ запись из памяти +++++++++++++++++++++++")
      setMainUser(newObject2) 
    } else { 
      var testObject = mainUser
      localStorage.setItem("mainUser", JSON.stringify(testObject));
      console.log("+++++++++++++++++++++++ запись в память ++++++")
    } 
  }, [mainUser.token])


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
          <NavBarComponent mainPageFiles={mainPageFiles} mainUser={mainUser} setMainUser={setMainUserF} />
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
            <UserFiles mainUserId={2} users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
