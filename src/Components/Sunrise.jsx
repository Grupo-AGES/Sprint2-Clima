import React from 'react';
import './Sunrise.css';


const Sunrise = (props) => {
  return (
    <div className='sunrise'>
        <p>Nascer do sol</p>
        {props.sunrise}
    </div>
  )
}

export default Sunrise