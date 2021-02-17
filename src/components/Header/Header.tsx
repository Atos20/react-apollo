import React from 'react'
import './Header.css'
import { FiDroplet } from "react-icons/fi";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='head'>
      <nav className="nav">
        <ul className='unordered'>
          <li>
           <FiDroplet />
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li >
            <FiDroplet/>
            <NavLink className='nav-link' to='/about'>About</NavLink>
          </li>
          {/* <li>
            <FiDroplet/>
            <NavLink className='nav-link'to='/location'>Location</NavLink>
          </li> */}
          <li>
          <FiDroplet/>
            <NavLink className='nav-link'to='/contact'>Let' connect!</NavLink>
          </li>
          <li>
          <FiDroplet/>
            <NavLink className='nav-link'to='/posts'>Post!</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
