import React from 'react'
import './TempHora.css'

const TempHora = (props) => {
  return (
    <div className='geral'>
      {props.temperature2.map((temp, index) => (
        <div className='index' key={index}>
          <span className='hour'>{index}:00</span><br/> {temp}°
        </div>
      ))}
    </div>
  )
}

export default TempHora