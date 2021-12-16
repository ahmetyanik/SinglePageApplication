import React, { Component } from "react";

export class Deneme3 extends Component {
  state = {
    isVisible: true,
  };

  render() {
    const state = this.props.state;

    const handleClick = (e) => {
      this.setState({
        isVisible: !this.state.isVisible,
      });
    };

    return (
      <div style={{ width: "30vw" }}>
        <div className="card mt-2">
          <h5
            onClick={handleClick}
            className="card-header bg-danger text-light"
          >
            {state.name}
          </h5>

          {console.log(this.state.isVisible)}

          {this.state.isVisible ? (
            <div className="card-body bg-warning text-light">
              <h5 className="card-title">{state.schule}</h5>
              <p className="card-text">{state.age}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Deneme3;
