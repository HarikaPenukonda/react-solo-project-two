import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import data from "./data";

export default function App(){

    return(
       <div>
         <Navbar/>
         <Main
          imageUrl={"images/chicago.jpeg"}
          title={"Willis Tower"}
          location={"Chicago"}
          googleMapsUrl={"https://www.google.com/maps/place/Willis+Tower/@41.8788764,-87.6359149,15z/data=!4m6!3m5!1s0x880e2cbee269fbbb:0x10f6dce5eb88c7d!8m2!3d41.8788764!4d-87.6359149!16zL20vMDZfN2s?entry=ttu"}
          startDate={"07 Oct, 2018"}
          endDate={" 09,Oct  2018"}
          description={"Standing 110 stories tall, its black aluminum and bronze-tinted glass exterior has become emblematic of Chicago, a city crazy about its architecture. Although its record-breaking height has been surpassed several times over, its innovative structural design remains noteworthy. The Willis Tower laid the foundation for the supertall buildings being built today."}
          />
         <Main
          imageUrl={"images/newyork.jpeg"}
          title={"Willis Tower"}
          location={"Chicago"}
          googleMapsUrl={"https://www.google.com/maps/place/Willis+Tower/@41.8788764,-87.6359149,15z/data=!4m6!3m5!1s0x880e2cbee269fbbb:0x10f6dce5eb88c7d!8m2!3d41.8788764!4d-87.6359149!16zL20vMDZfN2s?entry=ttu"}
          startDate={"07 Oct, 2018"}
          endDate={" 09,Oct  2018"}
          description={"Standing 110 stories tall, its black aluminum and bronze-tinted glass exterior has become emblematic of Chicago, a city crazy about its architecture. Although its record-breaking height has been surpassed several times over, its innovative structural design remains noteworthy. The Willis Tower laid the foundation for the supertall buildings being built today."}
          />
         <Main
          imageUrl={"images/colorado.png"}
          title={"Willis Tower"}
          location={"Chicago"}
          googleMapsUrl={"https://www.google.com/maps/place/Willis+Tower/@41.8788764,-87.6359149,15z/data=!4m6!3m5!1s0x880e2cbee269fbbb:0x10f6dce5eb88c7d!8m2!3d41.8788764!4d-87.6359149!16zL20vMDZfN2s?entry=ttu"}
          startDate={"07 Oct, 2018"}
          endDate={" 09,Oct  2018"}
          description={"Standing 110 stories tall, its black aluminum and bronze-tinted glass exterior has become emblematic of Chicago, a city crazy about its architecture. Although its record-breaking height has been surpassed several times over, its innovative structural design remains noteworthy. The Willis Tower laid the foundation for the supertall buildings being built today."}
          />
         
       </div>
    )
}