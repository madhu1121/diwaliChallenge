import React from 'react'
import './Advice.scss'

const Advice = (props) => {

    const {data} = props;

    console.log("here is props : ", data);
    return (
        <div className="display">
            <p className="display__advice">{data}</p>
        </div>
    )
}

export default Advice
