import React from 'react'
import './Input.scss'
import { FiSearch } from 'react-icons/fi'

export const Input = ({text, submit, func}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Please enter location" className="input_value" onChange={text}/>
        <span className="input_icon" onClick={func}>
            <FiSearch />
        </span>
    </form>
  )
}
