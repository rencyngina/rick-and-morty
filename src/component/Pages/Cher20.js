import React from 'react'
import './global.css'

const Cher20 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/20.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Ants in my Eyes Johnson</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> unknown</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Interdimensional Cable</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher20
