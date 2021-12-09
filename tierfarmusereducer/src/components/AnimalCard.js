import React from "react";

function AnimalCard({animal}) {
  return (
    <div>
      <div className="card" style={{width:"18rem"}}>
        <img src={animal.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{animal.name}</h5>
          <p className="card-text">
          {animal.content}
          </p>
          <a href={animal.link} className="btn btn-primary">
            Go {animal.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
