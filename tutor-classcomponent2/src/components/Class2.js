import React, { Component } from "react";

export class Class2 extends Component {
  state = {
    isVisible: true,
  };

  handleClick = () => {

    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    console.log(this.state);

    return (
      <div style={{ width: "30vw" }} className="mt-3">
        <div className="card">
          <div  onClick={this.handleClick} className="card-header">
            <h4 className="d-flex justify-content-between">
              {this.props.state.name} - Click Here
            </h4>
          </div>

          {this.state.isVisible ? (
            <div className="card-body">
              <h5 className="card-title">{this.props.state.schule}</h5>
              <p className="card-text">{this.props.state.age}</p>
            </div>
          ) : null}

        </div>
      </div>
    );
  }
}

export default Class2;
