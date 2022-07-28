import React, { useEffect, useState } from 'react'
import TokenProvider from '../services/TokenProvider';
import UserService from '../services/UserService'
import FileComponentMainPerson from './FileComponentMainPerson';
import FileComponentOtherPerson from './FileComponentOtherPerson';
import FileLoaderButton from './FileLoaderButton';
import SubscribeButton from './SubscribeButton'; 

function UserFiles(props) {

    // const [subskr, setSubskr] = useState(() => {
    //     return {
    //         userId: "",
    //         subId: ""
    //     }
    // })




    return (
        <div>
            {
                props.users.map(
                    user =>
                        <div key={user.userId.toString()}>
                            <div className="row rounded p-2 m-2 " style={{ backgroundColor: "#c1daff" }}>
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
                                        <div
                                            className="col" 
                                        >
                                           
                                        </div>
                                         
                                        {props.mainUserId === user.userId ? (<> 
                                            <FileLoaderButton myFiles={props.myFiles}/>
                                        </>) : (<div className="col-md-auto p-2">
                                        <div/>
                                         
                                            <SubscribeButton user={user} />
                                            
                                        </div>)
                                        }
                                    </div>
                                    {props.mainUserId == user.userId ?
                                        <FileComponentMainPerson user_id={user.userId} key={user.userId} />
                                        :
                                        <FileComponentOtherPerson user_id={user.userId} key={user.userId} />
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