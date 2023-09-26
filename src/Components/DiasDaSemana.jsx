import './DiasDaSemana.css';
import React, { Fragment } from "react";

function DiasDaSemana(props) {
  const { maxSemana, minSemana } = props;

  return (
    <Fragment>
      <div className='tempMinSemana'>
        <p>Temperatura Mínima</p>
        {Array.isArray(minSemana) ? (
          minSemana.map((minTemp, index) => (
            <div key={index}>
              {minTemp}°
            </div>
          ))
        ) : (
          <div>Valores de temperatura mínima não estão disponíveis.</div>
        )}
      </div>
      <div className='tempMaxSemana'>
        <p>Temperatura Máxima</p>
        {Array.isArray(maxSemana) ? (
          maxSemana.map((maxTemp, index) => (
            <div key={index}>
              {maxTemp}°
            </div>
          ))
        ) : (
          <div>Valores de temperatura máxima não estão disponíveis.</div>
        )}
      </div>
    </Fragment>
  )
}

export default DiasDaSemana;