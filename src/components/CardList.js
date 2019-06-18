import React from "react";
import ImgCard from './ImgCard';

class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:this.shuffleArray(props.images)
        };
        this.clickedImageIds=[];
    }
    
    shuffleArray(arr){
        return arr.sort(()=>{return Math.random()-0.5});
    }

    clickHandler = (e,id)=>{
        //count score or reset game
        if(this.clickedImageIds.indexOf(id) === -1){//clicked on something never clicked - win
            this.clickedImageIds.push(id);
            this.props.increaseScore();
        }else{//lose
            this.clickedImageIds=[];
            this.props.resetScore();
        }
        this.setState({images:this.shuffleArray(this.props.images)});
    }

    render(){
        const imagesCards = this.state.images.map(image=>{
            return <ImgCard imgFile={image.imgFile} imgName={image.imgName} key={image.id} onClick={(e)=>this.clickHandler(e,image.id)}/>
        })
        return <div className="cards-container">{imagesCards}</div>
    }
    
}

export default CardList;