import React from "react";

function ImgCard(props){
    return <div class="card">
        <img src={"./images/"+props.imgFile} alt={props.imgName} style={{"width":"100%"}} />
    </div>
}