import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    console.log("constructor");

    this.state = {
      condition: "loading...",
    };
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentDidMount() {

    console.log("componentDidMount");

    this.loadWeatherData()


  }

  loadWeatherData(){

    const city = "Berlin";
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7ccf39f58624360e151dce17c818ef3`;

    fetch(weatherAPI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ condition: (res.main.temp - 273).toFixed(2) });
      });

  }

  render() {
    console.log("render");
    return (
    <div>

    <h2>Today it's {this.state.condition}</h2>
    <button onClick={this.loadWeatherData.bind(this)}>aktualizieren</button>
    </div>
    
    );
  }
}

export default App;
