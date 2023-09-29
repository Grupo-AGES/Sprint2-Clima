import React from 'react'

const TempAtual = (props) => {

    return (
        <div>
            {props.temperature} 
            {<span>°</span>}
        </div>
    )
}

export default TempAtual