import React from 'react'
import './Navbar.css'
import { NavbarData } from '../NavbarData'
import NavBarItem from './NavBarItem'

const newNavbarItem = (newItem) => {
  return <NavBarItem 
    key={newItem.id}
    icon={newItem.icon}
    title={newItem.title}
    link={newItem.link}
  />
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbarList'>
        {NavbarData.map(newNavbarItem)}
      </ul>
    </div>
  )
}

export default Navbar