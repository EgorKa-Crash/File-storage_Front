import React from 'react'
import UserService from '../services/UserService'

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UserService.getSubscriptions().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1>Табличка пользователей</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <td>Id</td>
                            <td>Login</td>
                            <td>Password</td>
                            <td>Email</td>
                            <td>Nick_name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.userId}>
                                    <td scope="row"> {user.userId} </td>
                                    <td> {user.login} </td>
                                    <td> {user.password} </td>
                                    <td> {user.email} </td>
                                    <td> {user.nickName} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
} 
export default UserComponent