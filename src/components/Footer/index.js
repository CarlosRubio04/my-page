import React from 'react'
import { MainFooter } from './styles'

import Medium from '../../assets/medium.svg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import WhatsApp from '../../assets/whatsapp.svg'

export const Footer = () => {
  return (
    <MainFooter>
      <div className='Container'>
        <div className='Medium'>
          <a href='#' target='_blank'>
            <img src={Medium} alt='Medium Carlos Rubio' />
            <span>Leeme en Medium</span>
          </a>
        </div>
        <div className='Social'>
          <ul>
            <li>
              <a href='#'><img src={Facebook} alt='Facebook Carlos Rubio' /></a>
            </li>
            <li>
              <a href='#'><img src={Instagram} alt='Instagram Carlos Rubio' /></a>
            </li>
            <li>
              <a href='#'><img src={Twitter} alt='Twitter Carlos Rubio' /></a>
            </li>
          </ul>
        </div>
      </div>
    </MainFooter>
  )
}
