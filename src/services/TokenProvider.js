//import React from 'react';
//import FileService from '../services/FileService'

// function SelectBar() { 
//     const requestOptions = { headers: { "Authorization": `Bearer ${token}` } };
//     return requestOptions;
// } 
// export default SelectBar


class TokenProvider { 
    getToken() {
        var testObject = JSON.parse(localStorage.getItem("mainUser"));
        //console.log("++++++ получение из памяти пользователя с токеном +++++++++++++++++++++++")
        return testObject;
    }
 
    setToken(mainUser) {
        var testObject = mainUser
        localStorage.setItem("mainUser", JSON.stringify(testObject));
        //console.log("+++++++++++++++++++++++ запись в память пользователя с токеном ++++++")
    }

    getOptions() {
        const requestOptions = { "Authorization": `Bearer ${this.getToken().token}`};
        return requestOptions;
    }

    getRequestOptions() {
        const requestOptions = { headers: this.getOptions() };
        return requestOptions;
    }
}
export default new TokenProvider();