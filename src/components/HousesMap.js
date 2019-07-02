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
              [40.77933, -73.81225]
               ]

const mapConfig = {
                 center: [40.728291, -73.844612],
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
                     Check it!
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
