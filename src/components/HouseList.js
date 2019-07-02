import React, { Component } from 'react';
import HouseCard from './HouseCard.js';

class HouseList extends Component {

  render() {
    return (
      <div className="houseList">
        Single Family Houses For Sale
        {this.props.houses.map((house,index)=><HouseCard key={index} house={house} />)}
      </div>
    );
  }

}

export default HouseList;
