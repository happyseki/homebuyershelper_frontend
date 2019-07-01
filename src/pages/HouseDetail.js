import React, { Component } from 'react';
import FormContainer from '../components/FormContainer.js';

class HouseDetail extends Component {
    // <h1>{this.props.loction.houseProps.house.price}</h1>
    // const house = this.props.getHouse(this.state.id)
    // console.log("house", this.state.house)
  render() {
    const { house } = this.props
    console.log(house);
    if (house){
      return (
        <div className="HouseDetail">
         <div class="image-card">
        {house.images.map(image=><img src={image.name} alt='houseimages' width='500' height='400'/>)}
         </div>
        <h1>{this.props.house.price}</h1>
          <FormContainer />
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }

  }

}

export default HouseDetail;
