import React from 'react'
import UserService from '../services/UserService'

class UserComponent2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers(this.props.type).then((response) => {
            this.setState({ users: response.data })
            //console.log("запрос отправлен" + response.data)
        });
    }

    render() {
        return (
            <div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#" + this.props.users}
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                            style={{ backgroundColor: "#c1daff" }}
                        >
                            {this.props.users}
                        </button>
                    </h2>
                    <div
                        id={this.props.users}
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="list-group list-group-flush">

                            {
                                this.state.users.map(
                                    user =>
                                        <a onClick={(e) => this.props.getUser(user.userId, e)} className="list-group-item list-group-item-action" >
                                            {user.nickName}
                                        </a>
                                )

                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserComponent2