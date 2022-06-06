import React from 'react';

const Remove = (props) => {
   console.log("props:",props)
  return (
    <div>
              <p>{props.value}</p>
    </div>
  );
}

export default Remove;
