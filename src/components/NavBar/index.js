import React from 'react'
import { Link } from '@reach/router'
import { Nav } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <div className='Nav-Container'>
        <Link to={'/'}>CF</Link>
      </div>
    </Nav>
  )
}
