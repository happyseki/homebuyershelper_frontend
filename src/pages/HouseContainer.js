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
         <div className='row'>

            <div className='column'>
              <HousesMap />
            </div>

            <div className='box'>
             <div className='column2'>
              {this.props.houses.length > 0 ? <HouseList houses={this.props.houses} /> : <p className='loader'>Loading...</p>}
             </div>
           </div>
         </div>
         <HouseDetail />
     </React.Fragment>
    );
  }

}

export default HouseContainer;

// house={this.getHouse}
