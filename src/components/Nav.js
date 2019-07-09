import React, { Component } from 'react';
import FaAlignLeft  from 'react-icons/lib/fa/align-left';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state={
    isOpen: false
  }

  handleToggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
           <FaAlignLeft className="nav-icon" />
           </button>
            <div className="nav-header">
            <h1 style={{color:'#fc2f70'}}>HomeBuyersHelper</h1><img className='logo' src="./houselogo.png" alt="logo" />
          </div>
          <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
          <li>
          <Link to="/profile">Profile</Link>
          </li>
         </ul>
        </div>
      </nav>
    );
  }

}
export default Nav;
