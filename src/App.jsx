import axios from 'axios';
import './App.css';
import DiaAtual from './Components/DiaAtual';
import { Fragment, useEffect, useState } from "react";
import TempAtual from "./Components/TempAtual";
import Min_Max from "./Components/Min_Max";
import TempHora from "./Components/TempHora";
import Preciptation from "./Components/Preciptation";
import Sunset from "./Components/Sunset";
import Sunrise from "./Components/Sunrise";
import DiasDaSemana from "./Components/DiasDaSemana";
import IconeTemp from "./Components/IconeTemp";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [dadosApi, setDadosApi] = useState({});
  const [maxSemana, setMaxSemana] = useState("");
  const [minSemana, setMinSemana] = useState("");
  const [precipitationProb, setPrecipitationProb] = useState("");
  const [precipitationProbDay, setPrecipitationProbDay] = useState("");
  const [temperature, setTemperature] = useState("");
  const [temperature2, setTemperature2] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [precipitation, setPreciptation] = useState("");
  const [sunriseDate, setSunrise] = useState("");
  const [sunsetDate, setSunset] = useState("");

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat("pt-BR", options);

  async function getData() {
    if (inputValue) {
      console.log("funciona o getdata");
      const urlApi1 = `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&format=json&apiKey=e72a5844973a4abba1de87bfac36415f`;
      axios
        .get(urlApi1)
        .then((response1) => {
          console.log("response1", response1.data);
          const latitude = response1.data.results[0].lat;
          const longitude = response1.data.results[0].lon;
          const urlApi2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_min&timezone=auto `;
          console.log("response1", response1);
          axios
            .get(urlApi2)
            .then((response2) => {
              console.log(latitude, longitude);
              console.log("response2", response2.data);
              const { data } = response2;
              const temperature = response2.data.hourly.temperature_2m;
              const temperature2 = response2.data.hourly.temperature_2m.slice(
                0,
                24
              );
              const minSemana = response2.data.daily.temperature_2m_min;
              const maxSemana = response2.data.daily.temperature_2m_max;
              const sunrise = response2.data.daily.sunrise[0];
              const sunset = response2.data.daily.sunset[0];
              const rain = response2.data.hourly.rain[0];
              const precipitation = response2.data.hourly.precipitation_probability[0];
              const rainDaily = response2.data.daily.rain_sum[0];
              const tempAparente = response2.data.hourly.apparent_temperature[0];
              const maxDaily = response2.data.daily.temperature_2m_max;
              const minDaily = response2.data.daily.temperature_2m_min;
              const cloudcover = response2.data.hourly.cloudcover[0];
              const precipitationSum = response2.data.daily.precipitation_sum;
              const precipitationProb = response2.data.daily.precipitation_probability_min;
              const precipitationProbDay = response2.data.daily.precipitation_probability_min[0];
              console.log("sunrise", sunrise)//dia
              console.log("sunset", sunset)//dia
              console.log("precipitationProb", precipitationProb)//array

              const sunriseDate = new Date(sunrise); 
              const sunsetDate = new Date(sunset); 

               setDadosApi(data);
               setMinSemana(minSemana);
               setMaxSemana(maxSemana);
               setDadosApi(data);
              setTemperature(temperature);
              setTemperature2(temperature2);
              setMin(min);
              setMax(max);
              setPreciptation(precipitation);
              setPrecipitationProb(precipitationProb);
              setPrecipitationProbDay(precipitationProbDay);
              setSunrise(sunriseDate);
              setSunset(sunsetDate);
            })
            .catch((error) => {
              console.error("Erro ao buscar dados da API:", error);
              window.alert("A cidade pesquisada não existe.");
            });
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da API:", error);
          window.alert("A cidade pesquisada não existe.");
        });
    }
  }

  return (
    <Fragment>
      <div className="inputPrincipal">
        <span className="locationSymbol">&#x1F4CD;</span>
        <input
          className="city"
          placeholder="Cidade"
          name="cidade"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button onClick={getData}>pesquisar</button>
      </div>
      <div>
          <DiaAtual/>
          </div>
      <div>
        <TempAtual temperature={temperature[0]} />
      </div>
      <div>
        <Min_Max min={min} max={max} />
      </div>
      <div>
        <TempHora temperature2={temperature2} />
      </div>
      <div>
        <Preciptation precipitation={precipitation} />
      </div>
      <div>
        <Sunrise sunrise={formatter.format(sunriseDate)} />
      </div>
      <div>
        <Sunset sunset={formatter.format(sunsetDate)} />
      </div>
      <div>
        <IconeTemp precipitationProbDay={precipitationProbDay} sunrise={formatter.format(sunriseDate)} sunset={formatter.format(sunsetDate)}/>
      </div>
      <div>
        <DiaAtual/>
      </div>
      <div>
        <DiasDaSemana maxSemana={maxSemana} minSemana={minSemana} precipitationProb={precipitationProb}/>
      </div>
    </Fragment>
  );
}

export default App;
