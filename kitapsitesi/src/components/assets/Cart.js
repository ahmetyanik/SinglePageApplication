import React, { useState } from "react";

function Cart({ reducerState, dispatch }) {

    const [secilenKitaplar,setSecilenKitaplar] = useState([]);

    const newObject = reducerState.reduce(function(pre,cur){    

        if(!pre[cur.kitapismi]){
            pre[cur.kitapismi] = 1;
        }else{
            pre[cur.kitapismi]++
        }

        console.log(pre);

        return pre;
    },{})

    console.log(Object.keys(newObject));


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">CART</div>
        <ul className="list-group list-group-flush">
          {Object.keys(newObject).map((kitap, index) => {
            return <li className="list-group-item">{kitap}<span className="badge bg-info text-dark">{newObject[kitap]}</span></li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
