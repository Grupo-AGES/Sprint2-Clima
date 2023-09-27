import './DiasDaSemana.css';
import React, { Fragment } from "react";
import IconeTemp from './IconeTemp';

function DiasDaSemana(props) {
  const { maxSemana, minSemana } = props;
  const diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const hoje = new Date();
  const diaDaSemanaAtual = hoje.getDay();
  const diasDaSemana = [];
  let i = (diaDaSemanaAtual + 1) % 7;
  
  while (diasDaSemana.length < diaSemana.length-1) {
    diasDaSemana.push(diaSemana[i]);
    i = (i + 1) % 7;
  }
  
  return (
    <Fragment>
      <div className='diaDaSemana'>
        {Array.isArray(diasDaSemana) ? (
          diasDaSemana.map((diasDaSemana, index) => (
            <p key={index}>
            {diasDaSemana}
            </p>
          ))
        ) : (
          <div>Valores de dia da semana não estão disponíveis.</div>
        )}
      </div>
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