import React from 'react'


const TempHora = (props) => {
  return (
    <div className='componenteTempHora'>
      {props.temperature2.map((temp, index) => (
        <div className="componenteInternoTempHora" key={index}>
          <span>{index}:00</span><br/> {temp}°
        </div>
      ))}
    </div>
  )
}

export default TempHora