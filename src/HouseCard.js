import React, { Component } from 'react';
import FormContainer from './FormContainer.js';

class HouseCard extends Component {

  render() {
    const { house }=this.props
    return (
      <div>
      <h1>${house.price}</h1>
      <p>{house.area}</p>
      <h3>{house.location}</h3>
      <FormContainer />
      </div>
    );
  }

}

export default HouseCard;
