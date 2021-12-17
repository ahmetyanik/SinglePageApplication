import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import './main.css'

function Main() {

    const [avatar,setAvatar] = useState({

        size : "s",
        type : "square"

    })

    

  function getDatas(){


    var elementSize = document.getElementById("size");
    var valueSize = elementSize.value;

    var elementType = document.getElementById("type");
    var valueType = elementType.value;

    let newAvatar = {
        size: valueSize,
        type: valueType,
      }
    
    
      setAvatar(newAvatar);

      
    }
    
  useEffect(() => {
    getDatas();
  },[]);



  return (
    <div>
      <div
        className="container mt-5 d-flex flex-column"
        style={{ width: "30%" }}
      >
       
          <label >Choose a size:</label>
          <select name="cars" id="size">
            <option value="s">s - 30 x 30</option>
            <option value="m">m - 60 x 60</option>
            <option value="l">l - 120 x 120</option>
            <option value="xl">xl - 200 x 200</option>
          </select>
          <br />
          <label >Choose a type:</label>
          <select name="cars" id="type">
            <option value="square">Square</option>
            <option value="round">Rounded</option>
            <option value="circle">Circle</option>
          </select>
          <br/>
          <input onClick= {getDatas} type="submit" value="Submit" />
      
      </div>
      <div className="d-flex justify-content-center mt-5">

      <Avatar type={avatar.type} size={avatar.size} />

      </div>

    </div>
  );
}

export default Main;
