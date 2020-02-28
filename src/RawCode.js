import React, { Component } from 'react'
import './App.css'

class Raw extends Component {
  state = {
    count: 0,
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
  }
  changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let image = this.state.image === catURL ? dogURL : catURL
    this.setState({ image })
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className='App'>
        <h1>React App</h1>
        <img src={this.state.image} alt='animal' />
        <button onClick={this.changeAnimal}>Change Animal</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.addOne}>+1</button> {' '}
        <button onClick={this.minusOne}>-1</button>
      </div>
    )
  }
}

export default Raw