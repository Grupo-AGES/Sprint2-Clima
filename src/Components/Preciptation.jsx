import React from 'react';
import './Preciptation.css';

const Preciptation = (props) => {
  return (
    <div>
        <p>Probabilidade de chuva</p>
        {props.preciptation}
        {<span>%</span>}
    </div>
  )
}

export default Preciptation