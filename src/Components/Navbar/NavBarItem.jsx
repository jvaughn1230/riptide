import React from 'react'

const NavBarItem = (props) => {
  return (
    <li onClick={()=>{window.location.pathname = props.link}} className="navbarRow">
        <div className="navbarIcon">{props.icon}</div>
        <div className='navbarTitle'>{props.title}</div>
    </li>
  )
}

export default NavBarItem