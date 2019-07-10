import React, { Component } from 'react';
import HouseCard from './HouseCard.js';

class HouseList extends Component {

  render() {
    return (
      <>
        <h3> Houses For Sale </h3>
        <div className="house-container">
          {this.props.houses.map((house,index)=><HouseCard key={index} house={house} />)}
        </div>

      </>
    );
  }

}

export default HouseList;
