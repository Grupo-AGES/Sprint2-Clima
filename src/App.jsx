import axios from 'axios';
import './App.css';
import DiaAtual from './Components/DiaAtual';
import { Fragment, useEffect, useState } from "react";
import TempAtual from "./Components/TempAtual";
import Min_Max from "./Components/Min_Max";
import TempHora from "./Components/TempHora";
import Precipitation from "./Components/Precipitation";
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
  const [precipitationSum, setPrecipitationSum] = useState("");
  const [precipitationSumDay, setPrecipitationSumDay] = useState("");
  const [sunriseDate, setSunrise] = useState("");
  const [sunsetDate, setSunset] = useState("");
  const [sunriseSemana, setSunriseSemana] = useState("");
  const [sunsetSemana, setSunsetSemana] = useState("");
  const [tempHoraAtual, setTempHoraAtual] = useState("");

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat("pt-BR", options);

  const hoje = new Date;
  const time = hoje.getHours(); //pega a hora e minuto do momento


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
          const urlApi2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,rain,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,precipitation_sum,precipitation_probability_min&timezone=auto`;
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
              const min = response2.data.daily.temperature_2m_min[0];
              const max = response2.data.daily.temperature_2m_max[0];
              const minSemana = response2.data.daily.temperature_2m_min;
              const maxSemana = response2.data.daily.temperature_2m_max;
              const sunriseSemana = response2.data.daily.sunrise;
              const sunsetSemana = response2.data.daily.sunset;
              const sunrise = response2.data.daily.sunrise[0];
              const sunset = response2.data.daily.sunset[0];
              const rain = response2.data.hourly.rain[0];
              const rainDaily = response2.data.daily.rain_sum[0];
              const tempAparente = response2.data.hourly.apparent_temperature[0];
              const cloudcover = response2.data.hourly.cloudcover[0];
              const precipitationSumDay = response2.data.daily.precipitation_sum[0];
              const precipitationSum = response2.data.daily.precipitation_sum;
              const precipitationProb = response2.data.daily.precipitation_probability_min;
              const precipitationProbDay = response2.data.daily.precipitation_probability_min[0];
              console.log(precipitationProb)

              const sunriseDate = new Date(sunrise);
              const sunsetDate = new Date(sunset);

              setDadosApi(data);
              setMinSemana(minSemana);
              setMaxSemana(maxSemana);
              setTemperature(temperature);
              setTemperature2(temperature2);
              setMin(min);
              setMax(max);
              setPrecipitationSumDay(precipitationSumDay);
              setPrecipitationSum(precipitationSum)
              setPrecipitationProbDay(precipitationProbDay);
              setSunriseSemana(sunriseSemana);
              setSunsetSemana(sunsetSemana);
              setSunrise(sunriseDate);
              setSunset(sunsetDate);
              setTempHoraAtual(temperature2[time]);
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
      <div className="body">
      <div className='mainEsq'>
        <div className="cloudsIcon">
          <img className="imageLogo"src="/images/logo.png"/>
        </div>
        <div className="infoMomento">
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
      <div className="infoMomentoSL">
          <div className="tempDiaEPrec">
            <div className="tempEPrec">
            <div className="diaAtual">
              <DiaAtual />
             </div>
              <div className="tempAtual">
               <TempAtual temperature={tempHoraAtual}/>
              </div>
              <div className="precipitation">
               <Precipitation precipitationSumDay={precipitationSumDay} />
              </div>
            </div>
          </div>
         <div className='iconeEMin_Max'>
           <div className='divIconeTemp'>
            <IconeTemp precipitationSumDay={precipitationSumDay} sunrise={formatter.format(sunriseDate)} sunset={formatter.format(sunsetDate)} />
           </div>
           <div className="min_max">
            <Min_Max min={min} max={max} />
           </div>
      </div>
    </div>
   </div>
    <div className="tempHora">
     <div className='divSunrise'>
       <Sunrise sunrise={formatter.format(sunriseDate)} />
     </div>
     <div className='divSunset'>
       <Sunset sunset={formatter.format(sunsetDate)} />
     </div>
      <div className='divTempHora'>
        <TempHora temperature2={temperature2} />
      </div>
    </div>
  </div>
  <div className="mainDir">
      <div className='divDiasDaSemana'>
        <DiasDaSemana maxSemana={maxSemana} minSemana={minSemana} precipitationProb={precipitationProb} precipitationSum={precipitationSum} sunriseSemana={sunriseSemana} sunsetSemana={sunsetSemana}/>
      </div>
  </div>
</div>
    </Fragment>
  );
}

export default App;
