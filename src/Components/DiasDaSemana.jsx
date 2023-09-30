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
    precipitationSum,
    sunsetSemana,
    sunriseSemana,
  } = props;

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const sunriseDates = [];
  const sunsetDates = [];
  const formatter = new Intl.DateTimeFormat("pt-BR", options);

  let n = 0;
  let d = 0;

  while (n < sunsetSemana.length) {
    sunsetDates.push(formatter.format(new Date(sunsetSemana[n])));
    n++;
  }

  while (d < sunriseSemana.length) {
    sunriseDates.push(formatter.format(new Date(sunriseSemana[d])));
    d++;
  }

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
  const time = hoje.getHours() + ":" + hoje.getMinutes();
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
              precipitationSum[index] >= 5 &&
              time >= sunsetDates[index] &&
              time < sunriseDates[index]
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={noiteChuva} />
                </div>
              );
            } else if (
              precipitationSum[index] < 5 &&
              precipitationSum[index] > 3 &&
              time >= sunsetDates[index] &&
              time < sunriseDates[index]
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={noiteNum} />
                </div>
              );
            } else if (
              precipitationSum[index] <= 3 &&
              time >= sunsetDates[index] &&
              time < sunriseDates[index]
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={noiteBoa} />
                </div>
              );
            } else if (
              precipitationSum[index] >= 5 &&
              time < sunsetDates[index] &&
              time >= sunriseDates[index]
            ) {
              icone = (
                <div className="animationIconSemana">
                  <Lottie animationData={diaChuva} />
                </div>
              );
            } else if (
              precipitationSum[index] < 5 &&
              precipitationSum[index] > 3 &&
              time < sunsetDates[index] &&
              time >= sunriseDates[index]
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
                <p className="pDiaDaSemana">{dia}</p>
                {icone}
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
