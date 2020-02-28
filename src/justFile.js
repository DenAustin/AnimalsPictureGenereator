import React, { Component } from 'react'

export class justFile extends Component {

   
   render() {
      return (
         <div>
            
         </div>
      )
   }
}

export default justFile



//copy
let arrLength = AnimalsData.length;
    let opState = this.state.count;
    let setter = opState - arrLength;
    console.log(setter);
    if (setter < opState) {
      this.setState({
        count: opState + 1,
        image: AnimalsData[opState].image,
        name: AnimalsData[opState].name
      });
    } else if (setter >= 0) {
      let newSetter = setter -=arrLength;
      if (newetter < opState) {
        this.setState({
          count: opState + 1,
          image: AnimalsData[opState].image,
          name: AnimalsData[opState].name
        });
      } else {
        this.setState({
          count: opState + 1,
          image: AnimalsData[opState].image,
          name: AnimalsData[opState].name
        });
      }
    }
