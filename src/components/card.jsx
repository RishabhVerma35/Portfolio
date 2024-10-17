import React from "react";


function Card(props)
{
    return (
        <div className={ `card ${props.classKaName} `}>
        
        <div className="card-body  ">
      <h4 className="card-title text-center">{props.title}</h4>
     
      <p className="card-text text-center">{props.text}</p>
      <a href="#" class="card-link">{props.img}</a>
      
        </div>
    </div>
    );
  
}

export default Card;