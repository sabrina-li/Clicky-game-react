import React from "react";

function MessageBanner(props){
    let style={
        display:props.message?"block":"none"
    }

    return <div className="modal fade" role="dialog" style={style}>
        <div className="modal-content">
            <h4 className="modal-title">{props.message}</h4>
        </div>
    </div>

    
}

export default MessageBanner;