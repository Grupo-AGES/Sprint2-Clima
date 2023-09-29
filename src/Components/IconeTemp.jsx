
import Lottie from 'lottie-react'
import diaChuva from '../assets/icones/chuvaDia.json'
import noiteChuva from '../assets/icones/chuvaNoite.json'
import noiteNum from '../assets/icones/noiteNum.json'
import noiteBoa from '../assets/icones/noiteBoa.json'
import diaNum from '../assets/icones/diaNum.json'
import diaBom from '../assets/icones/diaBom.json'

function IconeTemp(props) {
  const { precipitationSumDay, sunset, sunrise } = props;
  const hoje = new Date;
  const time = hoje.getHours()+':'+hoje.getMinutes(); //pega a hora e minuto do momento

  if (precipitationSumDay >= 5 && time >= sunset && time < sunrise) {
    return (<div><Lottie animationData={noiteChuva}/></div>)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && time >= sunset && time < sunrise) {
    return (<div><Lottie animationData={noiteNum}/></div>)
  } else if (precipitationSumDay <= 3 && time >= sunset && time < sunrise) {
    return (<div><Lottie animationData={noiteBoa}/></div>)
  } else if(precipitationSumDay>=5 && time<sunset && time>=sunrise){
    return (<div><Lottie animationData={diaChuva}/></div>)
  }else if (precipitationSumDay<5 && precipitationSumDay>3 && time<sunset && time>=sunrise){
    return (<div><Lottie animationData={diaNum}/></div>)
  }else{
    return (<div><Lottie animationData={diaBom}/></div>)
  }

}

export default IconeTemp