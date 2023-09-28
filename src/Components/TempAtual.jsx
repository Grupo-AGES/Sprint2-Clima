import React from 'react'
import './TempAtual.css'

const TempAtual = (props) => {

    return (
        <div>
            <p>Temperatura Atual</p>
            {props.temperature}
            {<span>°</span>}
        </div>
    )
}

export default TempAtual