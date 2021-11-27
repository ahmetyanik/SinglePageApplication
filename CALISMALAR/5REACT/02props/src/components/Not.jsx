import React from "react";
import Resim from "./Resim";

function Not(props) {  


  return (
    <div>
      <div class="card-body shadow p-5 m-1">
        <h5 class="card-title">{props.baslik}- {props.tarih}</h5>
        <p class="card-text">
          {props.icerik}
        </p>
        <Resim resimAdresi = {props.resimAdresi}/>
        
      </div>
    </div>
  );
}

export default Not;
