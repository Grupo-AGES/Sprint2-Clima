import React from 'react'


const Preciptation = (props) => {
  console.log("propsPre",props.precipitationSumDay)
  if(props.precipitationSumDay<5){
    return (
      <div className='componentPreciptation'>
          <p>Probabilidade de chuva</p>
          0%
      </div>
    )
  }else if(props.precipitationSumDay>=5 && props.precipitationSumDay<25){
    return (
      <div className='componentPreciptation'>
          <p>Probabilidade de chuva</p>
          30%
      </div>
    )
  }else if(props.precipitationSumDay>=25 && props.precipitationSumDay<50){
    return (
      <div className='componentPreciptation'>
          <p>Probabilidade de chuva</p>
          70%
      </div>
    )
  }else{
    return (
      <div className='componentPreciptation'>
          <p>Probabilidade de chuva</p>
          90%
      </div>
    )
  }
}

export default Preciptation