import React from 'react'
import './TempHora.css'

const TempHora = (props) => {
  return (
    <div>
      <p>Temperatura por hora</p>
      {props.temperature2.map((temp, index) => (
        <div key={index}>
          <span>{index}:00</span> {temp}°
        </div>
      ))}
    </div>
  )
}

export default TempHora