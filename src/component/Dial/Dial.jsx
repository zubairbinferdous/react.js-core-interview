/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid red' , margin: '10px'}}>
            <h4>this is dial</h4>
            <h3>your Count:{props.step}</h3>
        </div>
    );
};

export default Dial;