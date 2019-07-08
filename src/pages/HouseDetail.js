import React, { Component } from 'react';
import FormContainer from '../components/FormContainer.js';

class HouseDetail extends Component {
    // console.log("house", this.state.house)
  render() {
    // const Blur = require('react-blur');
    const { house } = this.props
    if (house){
      return (
        <div className="HouseDetail">
        <main>
           <div className="image-container">
            {house.images.map(image=>{
            return(  <div className="image-card">
              <img src={image.name} alt='houseimages'
             width='350' height='280'/>
             </div>
           )})}
           </div>
          <h1>${house.price}</h1>
          <p> {house.area} </p>
          <h3>{house.location}</h3>
          <p>For Sale</p>
          <p>Property Taxes: ${house.tax}/mo   &nbsp;&nbsp;  Home Insurance: ${house.insurance}/mo</p>
          <FormContainer house={house} />
          </main>
        </div>
      );
    } else {
      return null
    }

  }

}

// <p className='loader'>Loading...</p>

export default HouseDetail;