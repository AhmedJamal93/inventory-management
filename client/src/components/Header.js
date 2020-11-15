import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{
  render() {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/inventory" className="navbar-brand">Inventory Management</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">HOME </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">ADD </Link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
  }
}



export default Header;