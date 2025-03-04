import React from 'react'
import {NavLink } from 'react-router-dom'
import "../css_files/nav.css"

function Navigation() {
    return (
        <div className ='nav'>
        <div className='desktop__nav'>
          <ul>
              <li >
              <NavLink to='/'>
              Home
              </NavLink>
              </li>

              <li>Brian Tumor Segmentation</li>
              <li>Satellite Image Segmentation</li>

              <li >
              <NavLink to='/about'>
              About Us
              </NavLink>
              </li>
          </ul>
      </div>   



        </div>
    )
}

export default Navigation