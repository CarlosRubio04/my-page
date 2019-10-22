import React from 'react'
import { Counter } from './styles'

export const CounterDown = ({ message }) => {
  return (
    <Counter>
      <div className='Container anim-typewriter'>
        { message }
      </div>
    </Counter>
  )
}
