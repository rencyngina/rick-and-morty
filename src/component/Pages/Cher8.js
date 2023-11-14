import React from 'react'
import './global.css'

const Cher8 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/8.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Adjudicator Rick</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Dead</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Citadel of Ricks</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher8
