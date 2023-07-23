import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import data from "./data";

export default function App(){

  const dataElements = data.map(items => {
      return(
        <Main
          {...items}
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