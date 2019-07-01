import React, { Component } from 'react';
import Nav from '../components/Nav.js';
import HouseList from '../components/HouseList.js';
import HousesMap from '../components/HousesMap.js';
import HouseDetail from '../pages/HouseDetail.js';

class HouseContainer extends Component {

  state={
    houses: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/houses')
    .then(res=>res.json())
    .then(houses=>{
      this.setState(prevState=>({
        houses: houses
      }))
    })
  }

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
         <HouseList houses={this.state.houses} />
         <HouseDetail />
    </React.Fragment>
    );
  }

}

export default HouseContainer;

// house={this.getHouse}
