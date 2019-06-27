import React from 'react';
import Header from './Header.js';
import HouseList from './HouseList.js';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: require('./pin.png'),
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
class App extends React.Component {
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
  render(){
    // console.log(this.state.houses)
    return(
        <React.Fragment>
          <Header />
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
             <Popup>
               <a href="https://www.google.com" target="_blank" rel='noopener noreferrer'>Click!</a>
             </Popup>
           </Marker>
          )}

         </Map>
          <HouseList houses={this.state.houses}/>
        </React.Fragment>
    )
  }
}

export default App;
