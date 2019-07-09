import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

class HouseCard extends Component {
  render() {
    const { house }=this.props
    return (
      <div className="house-card">
        <Link style={{ textDecoration: 'none', color: 'black' }}
        to={{pathname:`/houses/${house.id}`}}>
          <div className='house-image-container'><img src={house.images[0].name} alt='house' className='card-image' height='250'/></div>
            <h1>${house.price}</h1>
            <List>
                <List.Item>
                  <List.Icon name='home' />
                  <List.Content>{house.area}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>{house.location}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='smile outline' />
                  <List.Content>House For Sale</List.Content>
                </List.Item>
            </List>
        </Link>
      </div>
    );
  }

}

export default HouseCard;
