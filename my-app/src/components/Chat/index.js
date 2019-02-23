import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: ' ',
      open: false,
      numMessages: 0
    };
  }

  componentDidMount() {
    this._updateNumMessages();
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }
  // add feature to remember if you have seen messages or not, between renders
  componentWillReceiveProps() {
    if (this.state.open) {
      this._updateNumMessages();
    }
    return;
  }

  _updateNumMessages = () => {
    this.setState({ numMessages: this.props.numMessages });
  };

  _toggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      numMessages: this.props.messages.length
    }));
    this._updateNumMessages();
    // this.props.resetNumMessages();
  };

  _handleInputChange = event => {
    const id = event.target.id;
    this.setState({
      [id]: event.target.value
    });
  };

  _handleSendMesage = event => {
    event.preventDefault();
    if (this.state.currentMessage.trim() === '') {
      return;
    }
    this.props.addNewMessage(
      this.props.name,
      this.state.currentMessage,
      new Date().toLocaleTimeString()
    );
    this.setState({ currentMessage: ' ' });
  };

  _scrollToBottom = () => {
    if (this.state.open) {
      return this.endMessages.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  };

  render() {
    let { currentMessage, open } = this.state;
    let pastMessages = this.props.messages.map((itm, idx) => (
      <div className={itm.name === this.props.name ? 'me' : 'others'} key={idx}>
        <p id={itm.name === this.props.name ? 'meDate' : 'othersDate'}>
          {itm.date}
        </p>
        <p id="content">{itm.content}</p>
        <p id={itm.name === this.props.name ? 'meName' : 'othersName'}>
          {itm.name}
        </p>
      </div>
    ));

    if (open) {
      return (
        <div id="chatOpen" className="chatDrawer">
          <div
            id="chatClosedButton"
            className="btns chatDrawerBtn"
            onClick={this._toggleDrawer}
          >
            Close
          </div>
          <div id="messages">
            {pastMessages}
            <div ref={el => (this.endMessages = el)} />
          </div>
          <form id="sendMessage" onSubmit={this._handleSendMesage}>
            <div>
              <input
                type="text"
                id="currentMessage"
                value={currentMessage}
                onChange={this._handleInputChange}
              />
              <input id="sendBtn" type="submit" value="send" className="btns" />
            </div>
          </form>
        </div>
      );
    }
    return (
      <div id="chatClosed" className="chatDrawer">
        <div
          id="chatOpenButton"
          className="btns chatDrawerBtn"
          onClick={this._toggleDrawer}
          style={
            this.state.numMessages < this.props.messages.length
              ? { backgroundColor: 'red' }
              : {}
          }
        >
          {this.state.numMessages < this.props.messages.length
            ? `${this.props.messages.length -
                this.state.numMessages} new messages`
            : 'Open Chat'}
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Chat;
