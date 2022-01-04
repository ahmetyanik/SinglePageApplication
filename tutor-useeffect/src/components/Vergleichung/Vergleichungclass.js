import React, { Component } from "react";

export default class Vergleichung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
        const bett1 = document.querySelector("#bett1");
        bett1.innerText = this.state.count;
  }

  componentDidUpdate(){
    const bett1 = document.querySelector("#bett1");
    bett1.innerText = this.state.count;
  }

  render() {
    return (
      <div className="bg-warning p-1" style={{height:"20vh"}}>
      <h3 className="bg-dark text-light">"componentDidMount" and "componentDidUpdate" for Class Component</h3>
        <div className="fs-1" style={{display:"flex", justifyContent:"space-around", }}>
          <span>State:{this.state.count}</span> <span>Betroffenes Element:<span id="bett1"></span></span>
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}
