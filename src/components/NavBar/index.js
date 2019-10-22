import React from 'react'
import { Link } from '@reach/router'
import { Nav } from './styles'

import homeIcon from '../../assets/home_icon.svg'

export const NavBar = () => {
  return (
    <Nav>
      <div className='Nav-Container'>
        <Link to={'/'}>
          <img src={homeIcon} />
        </Link>

        <ul>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/'}>Portafolio</Link>
          </li>
        </ul>
      </div>
    </Nav>
  )
}
