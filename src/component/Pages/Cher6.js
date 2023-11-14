import React from 'react'
import './global.css'

const Cher6 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/6.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Abadango Cluster Princess</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Alive</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Alien</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Female</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Abadango</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher6
