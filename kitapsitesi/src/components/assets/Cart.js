import React from "react";
import { Link } from "react-router-dom";

function Cart({ reducerState, dispatch, kitaplar }) {
  console.log(kitaplar);

  const newObject = reducerState.reduce(function (pre, cur) {
    if (!pre[cur.kitapismi]) {
      pre[cur.kitapismi] = 1;
    } else {
      pre[cur.kitapismi]++;
    }

    return pre;
  }, {});

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
          {Object.keys(newObject).map((kitap, index) => {
            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-lg-between"
              >
                <span>
                  <Link to={`/book/${kitap}`}>
                    <span>{kitap}</span>
                  </Link>
                  <span className="badge bg-info text-dark fs-6 mx-1">
                    {newObject[kitap]}
                  </span>
                </span>
                <span className="d-flex">
                  <i
                    onClick={() => {
                      const secilenKitap = kitaplar.filter((stateKitap) => {
                        return stateKitap.kitapismi === kitap;
                      });

                      dispatch({
                        type: "plusFromCart",
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
          })}

          <li style={{ listStyle: "none" }}>Genel Toplam:{genelToplam()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
