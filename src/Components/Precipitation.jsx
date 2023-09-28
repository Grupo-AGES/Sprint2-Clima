import React from 'react'
import './Precipitation.css'

const Preciptation = (props) => {
  console.log("propsPre",props.precipitationSumDay)
  if(props.precipitationSumDay<5){
    return (
      <div>
          <p>Probabilidade de chuva</p>
          0
          {<span>%</span>}
      </div>
    )
  }else if(props.precipitationSumDay>=5 && props.precipitationSumDay<25){
    return (
      <div>
          <p>Probabilidade de chuva</p>
          30%
          {<span>%</span>}
      </div>
    )
  }else if(props.precipitationSumDay>=25 && props.precipitationSumDay<50){
    return (
      <div>
          <p>Probabilidade de chuva</p>
          70
          {<span>%</span>}
      </div>
    )
  }else{
    return (
      <div>
          <p>Probabilidade de chuva</p>
          90
          {<span>%</span>}
      </div>
    )
  }
}

export default Preciptation