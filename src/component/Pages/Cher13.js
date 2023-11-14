import React from 'react'
import './global.css'

const Cher13 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/13.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Alien Googah</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Unknown</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Alien</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Unknown</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Earth (Replacement Dimension)</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Cher13
