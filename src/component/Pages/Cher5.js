import React from 'react'
import './global.css'

const Char5 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder">
      <div className="morty">
        <img src="/images/5.jpeg" alt="Morty" />
        <div className="smith">
        <h1>Jerry Smith</h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Alive</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span>Earth (Replacement Dimension) </li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Char5
