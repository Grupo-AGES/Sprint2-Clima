import React from 'react';
import './Sunset.css';

const Sunset = (props) => {
  return (
    <div>
        <p>Pôr do sol</p>
        {props.sunset}
    </div>
  )
}

export default Sunset