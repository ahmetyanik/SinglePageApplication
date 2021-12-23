import React from "react";
import { Link } from "react-router-dom";

function Cart({ reducerState, dispatch, kitaplar }) {
  console.log(reducerState);
  const array = [];

  console.log(reducerState)

  function genelToplam() {
    let toplam = 0;

    reducerState.forEach((element) => {
      toplam += element.fiyat;
    });

    return toplam;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
      <Link to="/cartpage"> <div className="card-header">CART</div></Link> 
        <ul className="list-group list-group-flush">
          {reducerState.map((kitap, index) => {            


            if (!array.includes(kitap.kitapismi)) {
                kitap.tiklama=1;
                  array.push(kitap.kitapismi);
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-lg-between"
              >
                <span>
                  <Link to={`/book/${kitap.kitapismi}`}>
                    <span>{kitap.kitapismi}</span>
                  </Link>
                  <span className="badge bg-info text-dark fs-6 mx-1">
                    {
                      reducerState.map(element=>{

                        if(kitap.kitapismi===element.kitapismi){

                        console.log("kitap:" , kitap,kitap.tiklama)
                        }

                      }) 
                    }
                  </span>
                </span>
                <span className="d-flex">
                  <i
                    onClick={() => {
                      const secilenKitap = kitaplar.filter((stateKitap) => {
                        return stateKitap.kitapismi === kitap.kitapismi;
                      });                     


                      dispatch({
                        type: "add",
                        payload: { kitap: secilenKitap },
                      });
                    }}
                    className="fas fa-plus mx-4"
                  />
                  <i
                    onClick={() => {

                      
                      const secilenKitap = kitaplar.filter((stateKitap) => {
                        return stateKitap.kitapismi === kitap;
                      });

                      dispatch({
                        type: "minusFromCart",
                        payload: { kitap: secilenKitap, index: index },
                      });
                    }}
                    className="fas fa-minus"
                  ></i>
                </span>
              </li>
            );
            }else{
              kitap.tiklama++;
            }
          })}


          <li style={{ listStyle: "none" }}>Genel Toplam:{genelToplam()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
