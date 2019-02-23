import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentCount: this.props.currentCount};
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  timer = () => {
    this.setState({
      currentCount: Math.max(this.state.currentCount - 1, 0)
    });
    if (this.state.currentCount > 1 && this.props.timerRestart) {
      clearInterval(this.intervalId);
      this.setState({currentCount: this.props.currentCount});
      this.intervalId = setInterval(this.timer, 1000);
      this.props.toggleTimerRestart();
    }
    if (this.state.currentCount < 1 && this.props.timerRestart) {
      clearInterval(this.intervalId);
      this.setState({currentCount: this.props.currentCount});
      this.intervalId = setInterval(this.timer, 1000);
      this.props.toggleTimerRestart();
    }
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.setState({currentCount: this.props.currentCount});
      this.intervalId = setInterval(this.timer, 2000);
      this.props.currentCount === 10
        ? this.props.displayScoreBoard()
        : this.props.questionComplete();
    }
  };

  render() {
    return (
      <div
        className="timer"
        style={this.state.currentCount <= 5 ? {color: 'red'} : {color: 'white'}}
      >
        {this.state.currentCount}
      </div>
    );
  }
}

Timer.propTypes = {
  displayScoreBoard: PropTypes.func.isRequired,
  currentCount: PropTypes.number.isRequired,
  toggleTimerRestart: PropTypes.func.isRequired,
  timerRestart: PropTypes.bool.isRequired
};

export default Timer;
