import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import data from "./data";

export default function App(){

  const dataElements = data.map(items => {
      return(
        <Main
          img={items.imageUrl}
          title={items.title}
          location={items.location}
          url={items.googleMapsUrl}
          start={items.startDate}
          end={items.endDate}
          description={items.description}
        />
      )
  })

    return(
       <div>
         <Navbar/>
         {dataElements}
         
         
       </div>
    )
} 