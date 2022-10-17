import React from 'react'
import ComboBox from 'react-responsive-combo-box'
import './input.scss'

export const Input = ({func, submit, text}) => {

  const ComboBoxExample = () => {
    const data = [
      'America',
      'India',
      'Australia',
      'Argentina',
      'Ireland',
      'Indonesia',
      'Iceland',
      'Japan'
    ]
    return <ComboBox options={data} enableAutocomplete onChange={text}/>
  }
}
