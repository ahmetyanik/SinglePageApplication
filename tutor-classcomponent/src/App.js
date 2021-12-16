import React, { Component } from "react";
import "./App.css";
import Deneme from "./components/Deneme";
import Deneme2 from "./components/Deneme2";
import Deneme3 from "./components/Deneme3";
import Mounting from "./components/LifeCycle/Mounting";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personnen: [
        { name: "ahmet", age: 33, schule: "Gazi Universität"},
        {
          name: "felix",
          age: 4,
          schule: "Humboldt Universität"
        },
        {
          name: "siddik",
          age: 29,
          schule: "Technick Universität"
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Deneme />
        <Deneme2 key={1} state={this.state} />

        <div className="d-flex justify-content-center align-items-center flex-column">
          {this.state.personnen.map((person, index) => {
            return <Deneme3 state={person} key={index} />;
          })}
        </div>

        <Mounting test="ahmet"/>
      </div>
    );
  }
}

export default App;
