import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Home = () => {
  return (
    <div>
      <Link to='/'>Home Test</Link>
      <img src={logo} alt='riptide-logo'/>
    </div>
  )
}

export default Home