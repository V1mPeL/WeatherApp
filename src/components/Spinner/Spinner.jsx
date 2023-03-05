import React from 'react'
import './Spinner.scss'

export const Spinner = () => {
  return (
    <div className='spinner__wrapper'>
      <p className='spinner__text'>Enter the city to start</p>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
