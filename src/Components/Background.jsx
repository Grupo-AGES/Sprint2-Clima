import diaChuva from '../assets/Backgrounds/DiaChuva.png'
import noiteChuva from '../assets/Backgrounds/NoiteChuva.png'
import noiteNum from '../assets/Backgrounds/NoiteNub.png'
import noiteBoa from '../assets/Backgrounds/NoiteBoa.png'
import diaNum from '../assets/Backgrounds/DiaNub.png'
import diaBom from '../assets/Backgrounds/DiaSol.png'

function Background(props) {
  const { precipitationSumDay, sunset, sunrise } = props
  const hoje = new Date()
  const hours = hoje.getHours().toString().padStart(2, '0')
  // const minutes = hoje.getMinutes().toString().padStart(2, '0')
  // const time = `${hours}:${minutes}`
  const horaSunrise = sunrise.split(':')[0]
  const horaSunset = sunset.split(':')[0]

  if (precipitationSumDay >= 5 && hours >= horaSunset && hours > horaSunrise) {
    return (<div className='background'>
    <img src={noiteChuva} />
  </div>)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<div className='background'>
    <img src={noiteNum} /></div>)
  } else if (precipitationSumDay <= 3 && hours >= horaSunset && hours > horaSunrise) {
    return (<div className='background'>
    <img src={noiteBoa} /></div>)
  } else if (precipitationSumDay >= 5 && hours < horaSunset && hours >= horaSunrise) {
    return (<div className='background'>
    <img src={diaChuva} /></div>)
  } else if (precipitationSumDay < 5 && precipitationSumDay > 3 && hours < horaSunset && hours >= horaSunrise) {
    return (<div className='background'>
    <img src={diaNum} /></div>)
  } else {
    return (<div className='background'>
      <img src={diaBom} /></div>)
  }
}

export default Background