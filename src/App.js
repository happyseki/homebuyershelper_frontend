import React from 'react';
import Header from './Header.js';
import HouseList from './HouseList.js';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import L from 'leaflet';


let leafIcon = L.icon({
    iconUrl: require('./pin.png'),
    iconSize: new L.Point(36, 50),
    iconAnchor: new L.Point(18, 50),
    popupAnchor: new L.Point(0, -50)
});
// L.marker(new L.LatLng(50.5, 30.51), { icon: leafIcon }).addTo(map);

class App extends React.Component {
  state={
    houses: [],
    location:{
      lat: 51.505,
      lng: -0.09 },
    zoom: 13
  }
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/houses')
    .then(res=>res.json())
    .then(houses=>{
      this.setState(prevState=>({
        houses: houses
      }))
    })
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      this.setState({
        location:{
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }
      })
    })
  }
  render(){
    // console.log(this.state.houses)
   const position = [this.state.location.lat, this.state.location.lng]
    return(
        <React.Fragment>
          <Header />
          <Map className='map' center={position} zoom={this.state.zoom}>
          <TileLayer
           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
           position={position}
           icon={leafIcon}>
           <Popup>
             <a href="https://www.google.com" target="_blank" rel='noopener noreferrer'>Click!</a>
           </Popup>
         </Marker>
         </Map>
          <HouseList houses={this.state.houses}/>
        </React.Fragment>
    )
  }
}

export default App;
