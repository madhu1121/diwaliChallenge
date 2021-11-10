import React from 'react'

const Country = (props) => {

    console.log("here is my props", props);
    return (
        <div>
            <p>Here is Country Details:</p>
            <p>Name : {props.data.name}</p>
            <p>Capital City : {props.data.capitalCity}</p>
        </div>
    )
}

export default Country
