import React from 'react';
import PropTypes from 'prop-types';
import './listPlanets.css';

const ListPlanets = props => {
  let planetList = props.categories.map((itm, idx) => {
    let availableQuestions = idx === 0 ? 0 : itm.numQuestions;

    return (
      <div
        onClick={() => {
          if (!props.categories[idx].isActive && idx !== 0) {
            props.fetchData(itm.numQuestions, itm.id);
          } else {
            alert('Sorry one rocket per planet');
          }
        }}
        onMouseOver={() => props.toggleHover(idx)}
        onMouseOut={props.toggleHoverOut}
        key={idx}
        id={!props.categories[idx].isActive ? 'ListNot' : 'ListShow'}
        style={
          props.planetId === idx
            ? {backgroundColor: '#F00', borderRadius: '7px'}
            : {backgroundColor: ''}
        }
      >
        <img
          className="planetList"
          src={`/planet${idx}.svg`}
          alt={`planet${itm.displayName}`}
        />
        {itm.displayName}
        <div id="availableQuestions">{availableQuestions}</div>
      </div>
    );
  });
  return (
    <div className="stars">
      <div className="twinkling">
        <div id="listPlanets">{planetList}</div>;
      </div>
    </div>
  );
};

ListPlanets.propTypes = {
  planetId: PropTypes.number,
  toggleHover: PropTypes.func.isRequired,
  toggleHoverOut: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired
};

export default ListPlanets;
