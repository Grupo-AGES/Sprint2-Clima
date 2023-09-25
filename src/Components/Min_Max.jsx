import React, { Fragment } from "react";
import "./Min_Max.css";

function Min_Max(props) {
  return (
    <Fragment>
      <div className="min">
        <p>Temperatura Mínima</p>
        {props.min}
        {<span>°</span>}
      </div>
      <div className="max">
        <p>Temperatura Máxima</p>
        {props.max}
        {<span>°</span>}
      </div>
    </Fragment>
  );
}

export default Min_Max;
