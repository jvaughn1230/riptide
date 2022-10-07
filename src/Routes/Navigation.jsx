import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import './Navigation.css'

import React from 'react'

const Navigation = () => {
  return (
    <div className="navigation">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Navigation