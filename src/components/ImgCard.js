import React from "react";

function ImgCard(props){
    return <div className="card">
        <img src={"./images/"+props.imgFile} alt={props.imgName}/>
    </div>
}

export default ImgCard;