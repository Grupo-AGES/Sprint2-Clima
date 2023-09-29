
import React, { Fragment } from "react";

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
      <div>
        {Array.isArray(diasDaSemana) && Array.isArray(minSemana) && Array.isArray(maxSemana) ? (
          diasDaSemana.map((dia, index) => (
            <div key={index}>
              <p>{dia}</p>
              <div>{minSemana[index]}°</div>
              <div>{maxSemana[index]}°</div>
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
