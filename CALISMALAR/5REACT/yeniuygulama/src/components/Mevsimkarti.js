import React from "react";

function Mevsimkarti(props) {    

  return (
    <div>
      <div className="card mb-3" style = {{width : "500px", height : "500px"}}>
        <img src={props.resim} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.baslik}</h5>
          <p className="card-text">
            {props.icerik}
          </p>
          <p className="card-text">
            <small className="text-muted">Ahmet Yanik</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mevsimkarti;
