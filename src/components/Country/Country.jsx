import React from 'react'
import './Country.scss';

const Country = (props) => {

    console.log("here is my props", props);
    return (
        <div className="country">
            <p>Here is Country Details:</p>
            <p>Name : {props.data.name}</p>
            <p>Capital City : {props.data.capitalCity}</p>
        </div>
    )
}

export default Country
