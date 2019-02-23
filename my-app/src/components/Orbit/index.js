import React from 'react';
import PropTypes from 'prop-types';
import Planet from '../Planet';

const Orbit = props => {
  let planets = props.planets.map((itm, idx) => (
    <Planet
      key={idx}
      planet={itm}
      toggleHover={props.toggleHover}
      toggleHoverOut={props.toggleHoverOut}
      planetId={props.planetId}
      categories={props.categories}
      fetchData={props.fetchData}
      color={props.color}
    />
  ));

  return <div className={props.className}>{planets}</div>;
};

Orbit.propTypes = {
  planets: PropTypes.array.isRequired,
  toggleHover: PropTypes.func.isRequired,
  toggleHoverOut: PropTypes.func.isRequired,
  planetId: PropTypes.number,
  categories: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Orbit;
