/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import DeviceInfo from "../DeviceInfo/DeviceInfo";
import './Device.css';
const Device = (props) => {
  return (
    <div className='device'>
      <h2>this is device-name : {props.name} </h2>
        <DeviceInfo priceName={props.phonePrice}></DeviceInfo>
    </div>
  );
};

export default Device;
