import React, { Fragment } from "react";


function Min_Max(props) {
  return (
    <Fragment>
      <div>
        <div>
          <div>
         <p>Min</p>
            {props.min}
            {<span>°</span>}
          </div>
          <div >
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
