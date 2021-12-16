import React, { Component } from "react";
import "./App.css";
import Class1 from "./components/Class1";
import Class2 from "./components/Class2";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      personnen: [
        { name: "ahmet", age: 33, schule: "Gazi Universität" },
        {
          name: "felix",
          age: 30,
          schule: "Humboldt Universität",
        },
        {
          name: "siddik",
          age: 29,
          schule: "Technick Universität",
        },
       
      ],
    };
  }

  render() {
    return (
      <div>
        <Class1 state={this.state} />

        <div  className="d-flex justify-content-center align-items-center flex-column">
          {this.state.personnen.map((person, index) => {
            return <Class2 key={index} state={person} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
