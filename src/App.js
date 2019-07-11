import React from 'react';
import HouseContainer from './pages/HouseContainer.js';
import HouseDetail from './pages/HouseDetail.js';
import Nav from './components/Nav.js';
import NotFound from './pages/NotFound.js';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state={
    houses: [],
    searchInput: ''
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

  updateSearchInput=(e)=>{
    console.log(e.target.value)
    this.setState({
      searchInput: e.target.value
    })
  }

  render(){
    const filteredHouses = this.state.houses.filter(house=>{
      return house.house_type.toLowerCase()
      .indexOf(this.state.searchInput.toLowerCase()) !== -1
    })
    return(
        <React.Fragment>
          <Nav />
          <Switch>
          <Route exact path="/houses" render={(router)=><HouseContainer {...router} houses={filteredHouses} updateSearchInput={this.updateSearchInput}/>} />
          <Route exact path="/houses/:id" render={(router)=> {
            const foundHouse = this.state.houses.find(house => house.id === parseInt(router.match.params.id))
            return <HouseDetail {...router} house={foundHouse}/>
          }} />
          <Route component={NotFound} />
          </Switch>
        </React.Fragment>
    )
  }
}

export default App;
