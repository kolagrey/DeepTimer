import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class BlinkingText extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };

    this.chronos = setInterval(() => {
        this.setState(previousState => {
          return { show: !previousState.show };
        });
      },500);

  }

  componentWillUnmount() {
    clearInterval(this.chronos);
  }

  render() {
    const { style, text } = this.props;
    const { show } = this.state;
    const displayText = show ? text : '';
    return (
      <Text style={style}>{displayText}</Text>
    );
  }
}

BlinkingText.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string
}

export default BlinkingText;