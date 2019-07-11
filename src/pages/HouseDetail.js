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
          <h2>{house.house_type} For Sale</h2>
        <div className='row1'>
        <div className='info'>
           <div className="image-container">
            {house.images.map(image=>{
            return(  <div className="image-card">
              <img src={image.name} alt='houseimages'
             width='350' height='250'/>
             </div>
           )})}
           </div>
           </div>
          <div className='info'>
              <div className='headline'>
              <h1>${house.price}</h1>
              <p> {house.area} </p>
              </div>
              <h3>{house.location}</h3>
              <p>Property Taxes: ${house.tax}/mo   &nbsp;&nbsp;  Home Insurance: ${house.insurance}/mo</p>
              <p>{house.house_type === 'co-op'? 'HOA Fee: $900' : null}</p>
              <FormContainer house={house} />
          </div>
          </div>
          </main>
        </div>
      );
    } else {
      return null
    }

  }

}

export default HouseDetail;
