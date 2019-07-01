import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HouseCard extends Component {
  render() {
    const { house }=this.props
    return (
      <div className="houseCard">
      <Link style={{ textDecoration: 'none', color: 'black' }}
      to={{pathname:`/houses/${house.id}`,
           houseProps:{house:house}}}
      >
      <h1>${house.price}</h1>
      <p>{house.area}</p>
      <h3>{house.location}</h3>
      <p>House For Sale</p>
      </Link>
      </div>
    );
  }

}

export default HouseCard;
