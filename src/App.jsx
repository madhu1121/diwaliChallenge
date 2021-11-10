import React, { useState, useEffect } from 'react';
import './App.scss';

import Advice from './components/Advice/Advice'
import Country from './components/Country/Country';

const App = () => {

  const [isTrue, setIsTrue] = useState(true);
  const changeState = () => {
    setIsTrue(!isTrue)
  }

  const [advice, setAdvice] = useState(null);
  // useEffect(() => {
  //   fetch('https://api.adviceslip.com/advice')
  //     .then(res => res.json())
  //     .then(data => { console.log(data); setAdvice(data); })
  //     .catch(err => console.log(err))
  // }, [isTrue]);

  async function loadUsingAsyncAwait() {
    const result = await fetch('https://api.adviceslip.com/advice');
    const json = await result.json();
    setAdvice(json);
  }
  useEffect(() => {
    loadUsingAsyncAwait();
  }, [isTrue]);

  const [countryData,setCountryData] = useState(null);
  useEffect(() => {
    
    fetch('http://api.worldbank.org/v2/country/?format=json')
    .then(res => res.json())
    .then(data => {
      console.log("data", data);
      setCountryData(data[1])
      console.log("now data is: ",data[1]);
    })
  }, [isTrue])

  return (
    <>
      <section className="section">
        <button className="section__button" onClick={changeState}>
          Advice of the day
      </button>
        {/* {advice && <h1>{advice.slip.advice}</h1>}  */}
        {advice && <Advice data={advice.slip.advice} />}
      </section>

      <section className="section">
        {/* <button className="section__button" onClick={changeState}>
          Get Country Details
      </button> */}
        {/* {countryData && <h1>{countryData[0].name}</h1>}   */}
        {countryData && countryData.map(country => <Country data={country} />)}
      </section>

      

    </>
  )
}

export default App
