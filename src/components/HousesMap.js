import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { Link } from 'react-router-dom';

const icon = L.icon({
    iconUrl: require('../pin.png'),
    iconSize: new L.Point(36, 50),
    iconAnchor: new L.Point(18, 50),
    popupAnchor: new L.Point(0, -50)
});

const position = [
              [40.75496, -73.7612],
              [40.77933, -73.81225],
              [40.726590, -73.855556],
              [40.711925, -73.856287],
              [40.763029, -73.908482],
              [40.768149, -73.909238],
              [40.621016, -74.033545],
              [40.617699, -74.022016],
              [40.648566, -73.999721],
              [40.650064, -73.957897],
              [40.757791, -73.879131],
              [40.69896, -73.99408],
              [40.7313, -73.85643],
              [40.70763, -73.96372],
              [40.77605, -73.9474],
              [40.78584, -73.98007]
               ]

const mapConfig = {
                 center: [40.699178, -73.873469],
                 zoom: 11
               };

class HousesMap extends Component {

  render() {
      return (
        <div className="housesMap">
            <Map className='map' center={mapConfig.center} zoom={mapConfig.zoom}>
            <TileLayer
             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position.map((p,index)=>
              <Marker
                 key={index}
                 position={p}
                 icon={icon}>
                 onClick={() => this.props.history.push("/another-page")}
                 <Popup>
                   <Link to={`/houses/${index+1}`}  >
                     <strong>Check it!</strong>
                   </Link>
                 </Popup>
              </Marker>
            )}
           </Map>
        </div>
      );
  }

}

export default HousesMap;
