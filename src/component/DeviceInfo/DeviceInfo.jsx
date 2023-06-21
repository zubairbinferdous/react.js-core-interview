/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


const DeviceInfo = (props) => {
    // console.log(props)
    return (
        <div>
            <h4>this is phone info </h4>
            <p>tell me other phone Price {props.priceName}</p>
        </div>
    );
};

export default DeviceInfo;