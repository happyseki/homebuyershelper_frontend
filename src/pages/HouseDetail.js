import React, { Component } from 'react';
import FormContainer from '../components/FormContainer.js';

class HouseDetail extends Component {
  constructor(props) {
		super(props);
		console.log(this.props.location);
    // this.state = {
		// 	house: this.props.loction.houseProps.house
    //   }
    }
    // <h1>{this.props.loction.houseProps.house.price}</h1>
    // const house = this.props.getHouse(this.state.id)
    // console.log("house", this.state.house)
  render() {

    return (
      <div className="HouseDetail">

        <FormContainer />
      </div>
    );
  }

}

export default HouseDetail;
