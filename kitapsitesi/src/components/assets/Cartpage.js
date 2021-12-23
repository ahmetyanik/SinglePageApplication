import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./cartpage.css";

function Cartpage({ reducerState, dispatch }) {
  const array = [];

  return (
    <div>
      <Navbar />

      <div style={{ minHeight: "75vh" }}>
        <div class="card">
          <div class="row">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              {reducerState.map((element, index) => {
                console.log(element);

                if (!array.includes(element.kitapismi)) {
                  array.push(element.kitapismi);

                  return (
                    <div class="row main align-items-center">
                      <div class="col-2">
                        <img class="img-fluid" src={element.resimlinki} />
                      </div>
                      <div class="col">
                        <div class="row text-muted">{element.yazar}</div>
                        <div class="row">{element.kitapismi}</div>
                      </div>
                      <div class="col">
                        {" "}
                        <a href="#">-</a>
                        <a href="#" class="border">
                          {element.tiklama}
                        </a>
                        <a href="#">+</a>{" "}
                      </div>
                      <div class="col">
                        &euro; {element.fiyat}{" "}
                        <span class="close">&#10005;</span>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <Link to="/">
              {" "}
              <div class="back-to-shop">
                <span class="text-muted">Back to shop</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cartpage;
