import React, { Component } from 'react';
import Nav from '../components/Nav.js';
import HouseList from '../components/HouseList.js';
import HousesMap from '../components/HousesMap.js';
import HouseDetail from '../pages/HouseDetail.js';

class HouseContainer extends Component {

  render() {
    return (
     <React.Fragment>
         <Nav />
         <HousesMap />
         <HouseList houses={this.props.houses} />
         <HouseDetail />
     </React.Fragment>
    );
  }

}

export default HouseContainer;

// house={this.getHouse}
