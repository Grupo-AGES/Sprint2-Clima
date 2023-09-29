import React from 'react'


const TempHora = (props) => {
  return (
    <div>
      {props.temperature2.map((temp, index) => (
        <div key={index}>
          <span>{index}:00</span><br/> {temp}°
        </div>
      ))}
    </div>
  )
}

export default TempHora