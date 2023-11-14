import React from 'react'
import './global.css'

const Cher10 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/10.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Alan Rails</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Dead</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Worldender's lair</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher10
