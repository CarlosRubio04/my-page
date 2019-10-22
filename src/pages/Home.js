import React, { useState, useEffect } from 'react'
import { CounterDown } from '../components/CounterDown'

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [textLoading, setTextLoading] = useState('')

  useEffect(() => {
    LogicCounter()
  }, [])

  const LogicCounter = () => {
    const welcome = 'Hola, Bienvenidos a mi página'
    const world = welcome.split('')
    let offset = 0
    let fullWorld = ''
    world.forEach((letter) => {
      setTimeout(() => {
        console.log(letter)
        fullWorld += letter
        setTextLoading(fullWorld)
        if (fullWorld === welcome) {
          setTimeout(() => setLoading(false), 500)
        }
      }, 110 + offset)
      offset += 110
    })
  }

  if (loading) {
    return (
      <div className='Home'>
        <div className='Home_Container'>
          <CounterDown message={textLoading} />
        </div>
      </div>
    )
  }
  return (
    <div className='Home'>
      <div className='Home_Container'>
        Hola
      </div>
    </div>
  )
}
