import React from "react";
import ImgCard from './ImgCard';

function CardList(props){
    const imagesCards = props.images.map(image=>{
        return <ImgCard imgFile={image.imgFile} imgName={image.imgName} key={image.id}/>
    })
    return <div className="cards-container">{imagesCards}</div>
}

export default CardList;