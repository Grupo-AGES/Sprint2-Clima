import React, { Fragment } from "react";
import "./Min_Max.css";

function Min_Max(props) {
  return (
    <Fragment>
      <div className="geralMinMax">
        <div className="minMaxContainer">
          <div className="minMaxItem">
            <p>Min</p>
            {props.min}
            {<span>°</span>}
          </div>
          <div className="minMaxItem">
            <p>Max</p>
            {props.max}
            {<span>°</span>}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Min_Max;
