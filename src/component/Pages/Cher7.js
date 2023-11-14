import React from 'react'
import './global.css'

const Cher7 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/7.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Abradolf Lincler</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Unknown</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span>Testicle Monster Dimension</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher7
