import React, { Component } from 'react';
import HouseList from '../components/HouseList.js';
import HousesMap from '../components/HousesMap.js';
import HouseDetail from '../pages/HouseDetail.js';
import Search from '../components/Search.js';

class HouseContainer extends Component {

  render() {
    return (
     <React.Fragment>
       <Search updateSearchInput={this.props.updateSearchInput}/>
         <div className='row'>

            <div className='column'>
              <HousesMap />
            </div>

            <div className='box'>
             <div className='column2'>
              {this.props.houses.length > 0 ? <HouseList houses={this.props.houses} /> : <div className='loader'></div>}
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
