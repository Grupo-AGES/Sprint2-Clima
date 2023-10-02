
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
    return (<Lottie className='divIconeTemp' animationData={noiteChuva} />)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<Lottie className='divIconeTemp' animationData={noiteNum} />)
  } else if (precipitationSumDay <= 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<Lottie className='divIconeTemp' animationData={noiteBoa} />)
  } else if (precipitationSumDay >= 5 && hours < horaSunset && hours >= horaSunrise) {
    return (<Lottie className='divIconeTemp' animationData={diaChuva} />)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours < horaSunset && hours >= horaSunrise) {
    return (<Lottie className='divIconeTemp' animationData={diaNum} />)
  } else {
    return (<Lottie className='divIconeTemp' animationData={diaBom} />)
  }
}

export default IconeTemp