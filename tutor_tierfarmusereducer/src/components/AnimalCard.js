import React from "react";

function AnimalCard({animal,dispatch,index}) {
  return (
    <div>
      <div className="card mt-2" style={{width:"18rem"}}>
        <img src={animal.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{animal.name}</h5>
          <p className="card-text">
          {animal.content}
          </p>
          <a href={animal.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            Go {animal.name}
          </a>
          <button onClick={()=> dispatch({type:"delete", payload:{animalInfos :animal,index:index}})} className="btn btn-danger mx-1" > Delete Animal</button>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
