import React from "react";

function TierCard(props) {
  return (
    <div>
      <div className="card mx-3" style={{width :"18rem"}}>
        <img src={props.resim} className="card-img-top" alt="..." />
        <div className="card-body" >
          <h5 className="card-title">{props.baslik}</h5>
          <p className="card-text">
          {props.icerik}
          </p>
          <a href={props.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TierCard;
