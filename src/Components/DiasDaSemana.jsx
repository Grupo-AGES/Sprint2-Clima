import React, { Fragment } from "react";
import Lottie from "lottie-react";
import diaChuva from "../assets/icones/chuvaDia.json";
import noiteChuva from "../assets/icones/chuvaNoite.json";
import noiteNum from "../assets/icones/noiteNum.json";
import noiteBoa from "../assets/icones/noiteBoa.json";
import diaNum from "../assets/icones/diaNum.json";
import diaBom from "../assets/icones/diaBom.json";

function DiasDaSemana(props) {
  const {
    maxSemana,
    minSemana,
    precipitationSum
  } = props;

  const diaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
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
      <div className="bodyDiasDaSemana">
        {Array.isArray(diasDaSemana) &&
        Array.isArray(minSemana) &&
        Array.isArray(maxSemana) ? (
          diasDaSemana.map((dia, index) => {
            let icone;

            if (
              precipitationSum[index] >= 5
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={diaChuva} />
                </div>
              );
            } else if (
              precipitationSum[index] < 5 &&
              precipitationSum[index] > 3
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={diaNum} />
                </div>
              );
            } else {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={diaBom} />
                </div>
              );
            }

            return (
              <div className="divDiasDaSemana" key={index}>
                <div className="headerSemana">{icone}
                  <h6 className="pDiaDaSemana">{dia}</h6></div>
                <div className="componenteMinMaxSemana">
                  <div className="divTempMinSemana">{minSemana[index]}°</div>-
                  <div className="divTempMaxSemana">{maxSemana[index]}°</div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Valores de temperatura máxima não estão disponíveis.</div>
        )}
      </div>
    </Fragment>
  );
}

export default DiasDaSemana;