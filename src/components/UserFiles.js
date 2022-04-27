import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import FileComponentMainPerson from './FileComponentMainPerson';
import FileComponentOtherPerson from './FileComponentOtherPerson';

function UserFiles(props) {
    

    return (
        <div>
            {
                props.users.map(
                    user => 
                        <div>
                            <div class="row rounded p-2 m-2 " style={{ backgroundColor: "#c1daff" }}>
                                <div className="container">
                                    <div
                                        className="row p-2 m-2 "
                                        style={{ backgroundColor: "#c1daff" }}
                                    >
                                        <div
                                            className="col-md-auto p-2   fs-3 "
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {user.nickName}
                                        </div>
                                        <div className="col" />
                                        {props.mainUserId == user.userId ? (<div className="col-md-auto p-2">
                                            <a href="#" className="btn btn-primary">
                                                Add file
                                            </a>
                                        </div>) : (<div className="col-md-auto p-2">
                                            <a href="#" className="btn btn-primary">
                                                {/* {this.props.users == 'subscribers'
                                                    ? <div>отпис</div>
                                                    : <div>подпис</div>} */}
                                                subscribe 
                                            </a>
                                        </div>)
                                        }
                                    </div>
                                    {props.mainUserId == user.userId ?
                                        <FileComponentMainPerson user_id={user.userId} key={user.userId}/>
                                        :
                                        <FileComponentOtherPerson user_id={user.userId} key={user.userId}/>
                                    }
                                </div>
                            </div>
                        </div>
                )
            }
        </div>

    );
}
export default UserFiles