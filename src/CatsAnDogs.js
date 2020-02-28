import React, { Component } from "react";
import AnimalsData from "./components/AnimalsData";

export default class CatsAnDogs extends Component {
  state = {
    count: 0,
    num: 5
  };

  animimalFlip = () => {
    this.setState({
      count: this.state.count + 1
    });
    if(this.state.count >= AnimalsData.length - 1) {
      this.setState({
        count: 0
      })
    } 
  };

  numChange = () => {
    this.setState({
      num: this.state.num +3
    })
  };

  minusOne = () =>{
    this.setState({
      num: this.state.num -1
    })
  };

  render() {
    return (
      <div>
        <h1>{AnimalsData[this.state.count].name}</h1>
        <img src={AnimalsData[this.state.count].image} alt="animal" />
        <button onClick={this.animimalFlip}>Change Animal</button>
        <h1>{this.state.num}</h1>
        <button onClick={this.numChange}>+3</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}
