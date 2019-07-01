import React, { Component } from 'react';
import Nav from '../components/Nav.js';
import HouseList from '../components/HouseList.js';
import HousesMap from '../components/HousesMap.js';
import HouseDetail from '../pages/HouseDetail.js';

class HouseContainer extends Component {


  // getHouse=(id)=>{
  //   let house= this.state.houses.find(h=> h.id === id)
  //     return house
  // }

  render() {
    // console.log(this.state)
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
