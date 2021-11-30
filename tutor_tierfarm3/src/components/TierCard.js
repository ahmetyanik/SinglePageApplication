import React from "react";

function TierCard(props) {
  return (
    <div className="m-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
          {props.content}
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
