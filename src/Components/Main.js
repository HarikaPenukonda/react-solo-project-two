import React from "react";

export default function Main(){
    return(
        <div className="card--container">
            <div className="card">
                <div className="card--body">
                    {/* <div className="card--image-body"> */}
                    <img src="images/chicago.jpeg"
                        alt="chicago"
                        className="card--image"/>
                    {/* </div> */}
                    
                <div className="card--info">
                    <div className="card--span">
                        <img src="images/pin.png" 
                            width="10px"
                            alt="pin"
                            />
                    <span>  CHICAGO   </span>
                    <span><a href="#">     view on Google Maps</a></span>
                    </div>
                    <h3 className="card--title">Willis Tower</h3>
                    <div className="card--date">
                        <span>07 Oct, 2018 </span> - 
                        <span> 09,Oct  2018 </span>
                    </div>
                    <p className="card--desc">
                    Standing 110 stories tall, its black aluminum and bronze-tinted glass exterior has become emblematic of Chicago, 
                    a city crazy about its architecture. Although its record-breaking height has been surpassed several times over, 
                    its innovative structural design remains noteworthy. The Willis Tower laid the foundation for the supertall buildings being built today.
                    </p>
                </div>
                </div>
            </div>
        <hr/>
        </div>
      

            /* 
            <div className="card--stack">
                <img src="images/pin.png"
                    width="10px"
                />
                <span>CHICAGO</span>
                <a href="#">view on Google Maps</a> */
            
    )
}