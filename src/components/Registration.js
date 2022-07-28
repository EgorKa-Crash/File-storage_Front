
import React, { useState } from 'react'
import AuthentificationService from '../services/AuthentificationService';
import RegistrationServ from '../services/RegistrationServ';


function Regiatration(props) {

    const [register, setRegister] = useState(() => {
        return {
            login: "",
            email: "",
            nickname: "",
            password1: "",
            password2: "",
        }
    })

    const [authorization, setAuthorization] = useState(() => {
        return {
            login: "",
            password: ""
        }
    })

    async function outputP(e) { // 
        e.preventDefault();

        console.log(register)

        if (false) {
            alert("Пользователь с данной почтой уже существует")
        }
        else if (register.email.length < 5) {
            alert("Введенная почта некорректна")
        }
        else if (register.login.length < 4) {
            alert("Слишком короткий логин")
        }
        else if (register.nickname.length < 4) {
            alert("Слишком короткий ник")
        }
        else if (register.password1.length < 4) {
            alert("Длина пароля должна быть 4 и более символов")
        }
        else if (register.password1 !== register.password2) {
            alert("Введены разные пароли")
            setRegister({
                password1: "",
                password2: "",
                login: register.login,
                email: register.email,
                nickname: register.nickname
            }
            )
        }
        else {
            console.log("ок, регаю")

             
            try {
                var logReg = RegistrationServ.addNewUser({
                    login: register.login,
                    email: register.email,
                    nickName: register.nickname,
                    password: register.password1 
                })

                //logToken = RegistrationServ.login(authorization);
                //console.log((await logToken).data)
                //alert("Вы вошли под логином " + (await logToken).data.login);
                //props.setMainUser((await logToken).data);
                if((await logReg).data.registerException){
                    alert("Ошибка добавления пользователя, поменяйте почту или ник");
                }else{
                    alert("Вы успешно зарегистрировались под ником " + (await logReg).data.login);
                }
                 
                
            }
            catch (error) {
                alert("Непредвиденная ошибка регистрации");
            }
            //AuthentificationService.addNewUser(register)
        }
    }


    async function login(e) {
        e.preventDefault();
        console.log(authorization)
        console.log("заходим")
        var logToken
        try {
            logToken = AuthentificationService.login(authorization);
            //console.log((await logToken).data)
            //alert("Вы вошли под логином " + (await logToken).data.login);
            props.setMainUser((await logToken).data);
            window.location.reload();
        }
        catch (error) {
            alert("Ошибка входа, указан неверный логин или пароль.");
        }



        //console.log(props.mainUse.token)

        //отправить объект на главную форму, для обозначения пользователя

        //var user = 
    }

    // async function outputP(e) {  
    //     e.preventDefault();

    //     console.log(register) 
    //         console.log("регистрируемся")  
    //         //AuthentificationService.addNewUser(register) 
    // }


    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const changeInputAuthorization = event => {
        event.persist()
        //console.log("изменяем входные данные")
        setAuthorization(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }





    // async function outputP(e) { // 
    //     e.preventDefault();

    //     console.log(register) 
    // }
    //const [email, setEmail] = useState("")
    //const [email, setEmail] = useState("")


    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Вход</button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                <div className="offcanvas-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                Вход
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Регистрация
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content pt-3" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Логин
                                </label>
                                <input
                                    type="login"
                                    name="login"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={authorization.login}
                                    onChange={changeInputAuthorization}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={authorization.password}
                                    onChange={changeInputAuthorization}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={login}>
                                Войти
                            </button>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email адрес
                                </label>
                                <input
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={register.email}
                                    name="email"
                                    onChange={changeInputRegister}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Логин
                                </label>
                                <input
                                    name="login"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    value={register.login}
                                    onChange={changeInputRegister}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Ник
                                </label>
                                <input
                                    name="nickname"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    value={register.nickname}
                                    onChange={changeInputRegister}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    name="password1"
                                    className="form-control"
                                    value={register.password1}
                                    onChange={changeInputRegister}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    name="password2"
                                    className="form-control"
                                    value={register.password2}
                                    onChange={changeInputRegister}
                                />
                                <div id="emailHelp" className="form-text">
                                    Повторите введенный пароль
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={outputP}>
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Regiatration