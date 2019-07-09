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
            HomeBuyersHelper
          </div><img src='../logo.jpg' alt='logo'/>
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
