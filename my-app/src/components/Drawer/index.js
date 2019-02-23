import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ResultTable from '../ResultTable';
import './drawer.css';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      planetsScore: false
    };
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  toggleScore = () => {
    this.setState(prevState => ({
      planetsScore: !prevState.planetsScore
    }));
  };

  render() {
    let planetsScoreData = this.props.planetsScore
      .map((itm, idx) => {
        let planetFull = Object.values(itm).reduce((acc, cur) => cur + acc, 0);
        let planet = [];
        for (let name in itm) {
          planet.push(
            <div key={idx} style={{color: itm.color}}>
              {name} : {itm[name]}
            </div>
          );
        }
        return (
          <div
            style={
              planetFull === 5
                ? {backgroundColor: 'rgb(237, 103, 66)'}
                : {backgroundColor: 'rgba(0,0,0,0)'}
            }
          >
            <img
              src={`/planet${idx}.svg`}
              className="drawerPlanet"
              alt={`planet ${idx}`}
            />
            <div>{planet}</div>
          </div>
        );
      })
      .filter((itm, idx) => idx !== 0);
    let {open, planetsScore} = this.state;
    if (open && !planetsScore) {
      return (
        <div id="open" className="drawer">
          <div
            id="closedButton"
            className="btns drawerBtn"
            onClick={this.toggleDrawer}
          >
            Close
          </div>
          <div onClick={this.toggleScore} className="toggleScore">
            Sort by Planet
          </div>
          <ResultTable players={this.props.results} />
        </div>
      );
    }
    if (open && planetsScore) {
      return (
        <div id="open" className="drawer planetsScore">
          <div
            id="closedButton"
            className="btns drawerBtn"
            onClick={this.toggleDrawer}
          >
            Close
          </div>
          <div onClick={this.toggleScore} className="toggleScore">
            Sort by player
          </div>
          {planetsScoreData}
        </div>
      );
    }
    return (
      <div id="closed" className="drawer">
        <div
          id="openButton"
          className="btns drawerBtn"
          onClick={this.toggleDrawer}
        >
          Show scores
        </div>
      </div>
    );
  }
}

Drawer.defaultProps = {
  planetsScore: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
};

Drawer.propTypes = {
  results: PropTypes.object.isRequired,
  planetsScore: PropTypes.array.isRequired
};

export default Drawer;
