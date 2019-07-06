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
           <div className="image-container">
            {house.images.map(image=>{
            return(  <div className="image-card">
              <img src={image.name} alt='houseimages'
             width='300' height='200'/>
             </div>
           )})}
           </div>
          <h1>${house.price}</h1>
          <p> {house.area} </p>
          <h3>{house.location}</h3>
          <p>For Sale</p>
          <p>Property Taxes: ${house.tax}/mo   &nbsp;&nbsp;  Home Insurance: ${house.insurance}/mo</p>
          <FormContainer house={house} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }

  }

}

export default HouseDetail;
