/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [step , setStep] = useState(0);
    const data = () => setStep( step + 1 );

    useEffect(() => 
    console.log(step)
    ,[step]);


    return (
        <div style={{border: '3px solid green' , margin: '10px'}}>
            <h3>count {step} </h3>
            <button onClick={data}>up</button>
            <h2>this is watch data </h2>
            <Dial step={step}></Dial>
        </div>
    );
};

export default Watch;