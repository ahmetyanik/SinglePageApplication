import React, { Component } from "react";


export class Deneme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ahmet",
    };
  }
  

  handleName = () =>{
      this.setState({name:"mehmet"});
  }


  render() {
    return (
      <div>
        <h1 onClick={this.handleName}>Hello Bruder {this.state.name}</h1>
      </div>
    );
  }
}

export default Deneme;
