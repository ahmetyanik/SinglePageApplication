import React, { useEffect, useState } from "react";

function Vergleichungsfunc() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmet");

  useEffect(() => {
    const bett2 = document.querySelector("#bett2");
    bett2.innerText = count;
  }, [name]);

  return (
    <div className="bg-danger p-1 text-light fs-5" style={{ height: "50vh" }}>
      <h3 className="bg-dark ">
        "componentDidMount" and "componentDidUpdate" for Functional Component
        with useEffect
      </h3>
      <div
        className="fs-3"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <span>State:{count}</span>
        <div>
          <div>
            Betroffenes Element mit Leeren Array []:<span id="bett2"></span>
          </div>
          <div>
            Betroffenes Element mit [state]:<span id="bett3"></span>
          </div>
        </div>
      </div>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <button onClick={() => setName("Siddik")}>Change Name</button>
      <div>{name}</div>
    </div>
  );
}

export default Vergleichungsfunc;
