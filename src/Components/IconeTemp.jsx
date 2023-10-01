
import Lottie from 'lottie-react'
import diaChuva from '../assets/icones/chuvaDia.json'
import noiteChuva from '../assets/icones/chuvaNoite.json'
import noiteNum from '../assets/icones/noiteNum.json'
import noiteBoa from '../assets/icones/noiteBoa.json'
import diaNum from '../assets/icones/diaNum.json'
import diaBom from '../assets/icones/diaBom.json'

function IconeTemp(props) {
  const { precipitationSumDay, sunset, sunrise } = props
  const hoje = new Date()
  const hours = hoje.getHours().toString().padStart(2, '0')
  // const minutes = hoje.getMinutes().toString().padStart(2, '0')
  // const time = `${hours}:${minutes}`
  const horaSunrise = sunrise.split(':')[0]
  const horaSunset = sunset.split(':')[0]

  if (precipitationSumDay >= 5 && hours >= horaSunset && hours > horaSunrise) {
    return (<div><Lottie animationData={noiteChuva} /></div>)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<div><Lottie animationData={noiteNum} /></div>)
  } else if (precipitationSumDay <= 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<div><Lottie animationData={noiteBoa} /></div>)
  } else if (precipitationSumDay >= 5 && hours < horaSunset && hours >= horaSunrise) {
    return (<div><Lottie animationData={diaChuva} /></div>)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours < horaSunset && hours >= horaSunrise) {
    return (<div><Lottie animationData={diaNum} /></div>)
  } else {
    return (<div><Lottie animationData={diaBom} /></div>)
  }
}

export default IconeTemp