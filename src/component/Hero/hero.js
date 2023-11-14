import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
 
const Hero = () => {
  // Sample data for each card
  const characters = [
    { id: 1, name: 'Rick Sanchez', imageSrc: '/images/1.jpeg', linkTo: '/Cher1' },
    { id: 2, name: 'Morty Smith', imageSrc: '/images/2.jpeg', linkTo: '/Cher2' },
    { id: 3, name: 'Summer Smith', imageSrc: '/images/3.jpeg', linkTo: '/Cher3' },
    { id: 4, name: 'Beth Smith', imageSrc: '/images/4.jpeg', linkTo: '/Cher4' },
    { id: 5, name: 'Jerry Smith', imageSrc: '/images/5.jpeg', linkTo: '/Cher5' },
    { id: 6, name: 'Abadango Cluster Princess', imageSrc: '/images/6.jpeg', linkTo: '/Cher6' },
    { id: 7, name: 'Abradolf Lincler', imageSrc: '/images/7.jpeg', linkTo: '/Cher7' },
    { id: 8, name: 'Adjudicator Rick', imageSrc: '/images/8.jpeg', linkTo: '/Cher8' },
    { id: 9, name: 'Agency Director', imageSrc: '/images/9.jpeg', linkTo: '/Cher9' },
    { id: 10, name: 'Alan Rails', imageSrc: '/images/10.jpeg', linkTo: '/Cher10' },
    { id: 11, name: 'Albert Einstein', imageSrc: '/images/11.jpeg', linkTo: '/Cher11' },
    { id: 12, name: 'Alexander', imageSrc: '/images/12.jpeg', linkTo: '/Cher12' },
    { id: 13, name: 'Alien Googah', imageSrc: '/images/13.jpeg', linkTo: '/Cher13' },
    { id: 14, name: 'Alien Morty', imageSrc: '/images/14.jpeg', linkTo: '/Cher14' },
    { id: 15, name: 'Alien Rick', imageSrc: '/images/15.jpeg', linkTo: '/Cher15' },
    { id: 16, name: 'Amish Cyborg', imageSrc: '/images/16.jpeg', linkTo: '/Cher16' },
    { id: 17, name: 'Annie', imageSrc: '/images/17.jpeg', linkTo: '/Cher17' },
    { id: 18, name: 'Antenna Morty', imageSrc: '/images/18.jpeg', linkTo: '/Cher18' },
    { id: 19, name: 'Antenna Rick', imageSrc: '/images/19.jpeg', linkTo: '/Cher19' },
    { id: 20, name: 'Ants in my Eyes Johnson', imageSrc: '/images/20.jpeg', linkTo: '/Cher20' },
    // Add more characters as needed
  ];
 
  return (
    <div className='cher-cont'>
      <ul className='cher-list'>
        {characters.map((character) => (
          <Link to={character.linkTo} key={character.id} className='li'>
            <li className='card-holder'>
              <div className='card'>
                <img src={character.imageSrc} alt={character.name} className='card-image' />
                <p>{character.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
 
export default Hero;