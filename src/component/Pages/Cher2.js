import React from "react";
import "./global.css";

const Cher2 = () => {
  return (
    <div className="morty-c">
    <div className="morty-holder" >
      <div className="morty">
        <img src="/images/2.jpeg" alt="Morty" />
        <div className="smith" style={{backgroundColor: "white"}}>
        <h1>Morty Smith </h1>
        <br></br>
        <ul className="my-list">
          <li><span style={{
            fontWeight: 'bold'
          }}>Status:</span> Alive</li>
          <li><span style={{fontWeight: 'bold'}}>Species:</span> Human</li>
          <li><span style={{fontWeight: 'bold'}}>Gender:</span> Male</li>
          <li><span style={{fontWeight: 'bold'}}>Location:</span> Citadel of Ricks</li>
        </ul>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Cher2;
