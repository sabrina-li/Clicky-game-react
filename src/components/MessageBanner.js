import React from "react";

function MessageBanner(props){
    let style={
        display:props.message?"block":"none"
    }

    return <div className="notification overlay" role="dialog" style={style}>
            <button className="delete"></button>
            <p className="notification-text ">{props.message}</p>
        </div>
}

export default MessageBanner;