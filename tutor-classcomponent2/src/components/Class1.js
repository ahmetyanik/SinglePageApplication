import React, { Component } from "react";

export class Class1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ahmet",
      surname: "Yanik",
      obst: ["banana", "apple"],
    };
  }

  changeName = () => {
    this.setState({ name: "Muhanned" });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.changeName}>
          {this.state.name} {this.state.surname}
        </h1>
      </div>
    );
  }
}

export default Class1;
