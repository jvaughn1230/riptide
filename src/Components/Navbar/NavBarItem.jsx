import React from 'react'
import { Link } from 'react-router-dom'

const NavBarItem = (props) => {
  console.log("Working" + props)
  return (
    <li className="navbarRow">
        <div className="navbarIcon">{props.icon}</div>
        <Link to={`${props.link}`} className='navbarTitle'>{props.title}</Link>
    </li>
  )
}

export default NavBarItem