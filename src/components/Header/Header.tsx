import React from 'react'
import './Header.css'
import { FiDroplet } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='head'>
      <nav className="nav">
        <ul >
          <li >
            <NavLink to='/'><FiDroplet/>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'><FiDroplet/>About</NavLink>
          </li>
          <li>
            <NavLink to='/location'><FiDroplet/>Location</NavLink>
          </li>
          <li>
            <NavLink to='/contact'><FiDroplet/>Contact me!</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
