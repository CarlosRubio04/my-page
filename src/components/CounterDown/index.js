import React from 'react'
import { Counter } from './styles'

export const CounterDown = ({ message }) => {
  return (
    <Counter>
      <div className='Container line-1 anim-typewriter'>
        { message }
      </div>
    </Counter>
  )
}
