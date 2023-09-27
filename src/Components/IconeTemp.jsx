import './IconeTemp.css'
import Lottie from 'lottie-react'
import diaChuva from '../assets/icones/chuvaDia.json'
import noiteChuva from '../assets/icones/chuvaNoite.json'
import noiteNum from '../assets/icones/noiteNum.json'
import noiteBoa from '../assets/icones/noiteBoa.json'
import diaNum from '../assets/icones/diaNum.json'
import diaBom from '../assets/icones/diaBom.json'

function IconeTemp(props) {
  const { precipitationProbDay, sunset, sunrise } = props;
  const hoje = new Date;
  const time = hoje.getHours()+':'+hoje.getMinutes(); //pega a hora e minuto do momento
  console.log("sunset", props.sunset)//ta vindo string vazia, pegar matheus
  console.log("sunrise", props.sunrise)//ta vindo string vazia, pegar matheus
  // const partsSunset = sunset.split('T');
  // const partsSunrise = sunrise.split('T'); 
  // const hourSunset = partsSunset[1].substring(0, 5);
  // const hourSunrise = partsSunrise[1].substring(0, 5);
  // console.log("sunset", hourSunset)
  // console.log("sunrise", hourSunrise)
  if (precipitationProbDay >= 60 && time >= sunset && time < sunrise) {
    return <Lottie animationData={noiteChuva}/>
  } else if (precipitationProbDay < 60 && precipitationProbDay > 30 && time >= sunset && time < sunrise) {
    return <Lottie animationData={noiteNum}/>
  } else if (precipitationProbDay <= 30 && time >= sunset && time < sunrise) {
    return <Lottie animationData={noiteBoa}/>
  } else if(precipitationProbDay>=60 && time<sunset && time>=sunrise){
    return <Lottie animationData={diaChuva}/>
  }else if (precipitationProbDay<60 && precipitationProbDay>30 && time<sunset && time>=sunrise){
    return <Lottie animationData={diaNum}/>
  }else{
    return <Lottie animationData={diaBom}/>
  }

}

export default IconeTemp