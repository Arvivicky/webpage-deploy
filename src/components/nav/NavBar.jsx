import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar=(props)=> {
  return (
    <div>
    <nav className="navigation">
      <ul className='bar'>
        <li className="nav" ><a href="" ><span className="navitems">Time Table</span></a></li>
        <li className="nav"><a href=""><span className="navitems">Map</span></a></li>
        <li className="nav"><a href=""><span className="navitems">FacultyNameList</span></a></li>
        <li className="login"><NavLink to='/login'  target="_blank"><span>Login</span></NavLink></li>
      </ul>
    </nav>
    <h1 className='h1title'><span className="E">E</span>lectrical and <span className="E">E</span>lectronics <span className="E">E</span>ngineering</h1>
    </div>
  );
}

export default NavBar;
