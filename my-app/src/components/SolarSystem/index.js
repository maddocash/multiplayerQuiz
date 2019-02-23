import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from '../Chat';
import Orbit from '../Orbit';
import Drawer from '../Drawer';
import Loading from '../Loading';
import NextRound from '../NextRound';
import ListPlanets from '../ListPlanets';
import './solarSystem.css';

class SolarSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetId: 100
    };
  }
  // change to null
  _toggleHoverIn = planetId => {
    this.setState({
      planetId: planetId
    });
  };
  _toggleHoverOut = planetId => {
    this.setState({
      planetId: 100
    });
  };
  render() {
    return (
      <div className="stars">
        <div className="twinkling">
          <Drawer
            results={this.props.results}
            planetsScore={this.props.planetsScore}
            color={this.props.color}
          />
          <ListPlanets
            planetId={this.state.planetId}
            toggleHover={this._toggleHoverIn}
            toggleHoverOut={this._toggleHoverOut}
            categories={this.props.categories}
            fetchData={this.props.fetchData}
            planetsScore={this.props.planetsScore}
          />
          <Orbit
            className="outerOrbit solarSystem"
            planets={[8, 9, 10, 11, 12]}
            toggleHover={this._toggleHoverIn}
            toggleHoverOut={this._toggleHoverOut}
            planetId={this.state.planetId}
            categories={this.props.categories}
            fetchData={this.props.fetchData}
            color={this.props.color}
          />
          <Orbit
            className="centralOrbit solarSystem"
            planets={[4, 5, 6, 7]}
            toggleHover={this._toggleHoverIn}
            toggleHoverOut={this._toggleHoverOut}
            planetId={this.state.planetId}
            categories={this.props.categories}
            fetchData={this.props.fetchData}
            color={this.props.color}
          />
          <Orbit
            className="innerOrbit solarSystem"
            planets={[1, 2, 3]}
            toggleHover={this._toggleHoverIn}
            toggleHoverOut={this._toggleHoverOut}
            planetId={this.state.planetId}
            categories={this.props.categories}
            fetchData={this.props.fetchData}
            color={this.props.color}
          />
          <Orbit
            className="0 solarSystem"
            planets={[0]}
            toggleHover={this._toggleHoverIn}
            toggleHoverOut={this._toggleHoverOut}
            planetId={this.state.planetId}
            categories={this.props.categories}
            fetchData={this.props.fetchData}
            color={this.props.color}
          />
          <Loading showLoading={this.props.showLoading} />
          <NextRound roundControl={this.props.roundControl} />
          <Chat
            addNewMessage={this.props.addNewMessage}
            messages={this.props.messages}
            name={this.props.name}
            numMessages={this.props.numMessages}
            resetNumMessages={this.props.resetNumMessages}
          />
        </div>
      </div>
    );
  }
}

SolarSystem.propTypes = {
  color: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  fetchData: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  planetsScore: PropTypes.array.isRequired,
  showLoading: PropTypes.bool.isRequired,
  roundControl: PropTypes.bool.isRequired,
  addNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default SolarSystem;
