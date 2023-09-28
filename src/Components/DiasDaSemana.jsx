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
  
  while (diasDaSemana.length < diaSemana.length - 1) {
    diasDaSemana.push(diaSemana[i]);
    i = (i + 1) % 7;
  }
  
  return (
    <Fragment>
      <div className='bodyDiasDaSemana'>
        {Array.isArray(diasDaSemana) && Array.isArray(minSemana) && Array.isArray(maxSemana) ? (
          diasDaSemana.map((dia, index) => (
            <div className='divDiasDaSemana' key={index}>
              <p className='pDiaDaSemana'>{dia}</p>
              <div className='divTempMinSemana'>{minSemana[index]}°</div>
              <div className='divTempMaxSemana'>{maxSemana[index]}°</div>
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
