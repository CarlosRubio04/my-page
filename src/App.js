import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <LocationProvider>
        <Router>
          <Home path='/' />
        </Router>
      </LocationProvider>
      <Footer />
    </div>
  )
}
