import React from "react";

export default function Main(props){
    return(
        <div className="card--container">
            <div className="card">
                <div className="card--body">
                    <img src={props.img}
                        alt="chicago"
                        className="card--image"/>
                    
                <div className="card--info">
                    <div className="card--span">
                        <img src="images/pin.png" 
                            width="10px"
                            alt="pin"
                            />
                    <span>  {props.location}   </span>
                    <span><a href={props.url}>     view on Google Maps</a></span>
                    </div>
                    <h3 className="card--title">{props.title}</h3>
                    <div className="card--date">
                        <span>{props.start} </span> - 
                        <span> {props.end} </span>
                    </div>
                    <p className="card--desc">{props.description}</p>
                </div>
                </div>
            </div>
        <hr/>
        </div>
            
    )
}