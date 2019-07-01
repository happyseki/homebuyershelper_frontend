import React from 'react';
import HouseContainer from './pages/HouseContainer.js';
import HouseDetail from './pages/HouseDetail.js';
import NotFound from './pages/NotFound.js';
import {Route, Switch} from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render(){
    return(
        <React.Fragment>
          <Switch>
          <Route exact path="/houses" component={HouseContainer} />
          <Route exact path="/houses/:id" component={HouseDetail} />
          <Route component={NotFound} />
          </Switch>
        </React.Fragment>
    )
  }
}

export default App;
