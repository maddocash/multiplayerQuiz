import React from 'react';
import PropTypes from 'prop-types';
import './planet.css';

const Planet = props => {
  let planetFull = Object.values(props.categories[props.planet].score).reduce(
    (acc, cur) => cur + acc,
    0
  );
  return (
    <div
      className={`planet${props.planet}`}
      onMouseOver={() => props.toggleHover(props.planet)}
      onMouseOut={props.toggleHoverOut}
      style={props.planetId === props.planet ? {transform: 'scale(4)'} : {}}
    >
      <img
        id={`${props.planet}`}
        src={`/planet${props.planet}.svg`}
        alt={`planet${props.planet}`}
        onClick={() => {
          if (!props.categories[props.planet].isActive && props.planet !== 0) {
            props.fetchData(
              props.categories[props.planet].numQuestions,
              props.categories[props.planet].id,
              props.color
            );
          } else if (props.categories[props.planet].isActive) {
          }
        }}
      />
      <img
        style={{
          backgroundColor: props.categories[props.planet].color,
          borderRadius: '50%'
        }}
        src="/padlock-lock-icon.png"
        className="lockPlayer"
        alt="padlock on planet"
        id={
          props.planet === 0 || !props.categories[props.planet].isActive
            ? 'not'
            : 'show'
        }
        onClick={() => alert('Sorry one rocket per planet')}
      />
      <img
        src="/lock.png"
        height="30%"
        className="lock"
        alt="padlock on planet"
        id={props.planet === 0 || planetFull === 5 ? 'show' : 'not'}
        onClick={() => alert('Sorry one rocket per planet')}
      />
    </div>
  );
};

Planet.propTypes = {
  planets: PropTypes.number,
  toggleHover: PropTypes.func.isRequired,
  toggleHoverOut: PropTypes.func.isRequired,
  planetId: PropTypes.number,
  categories: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Planet;
