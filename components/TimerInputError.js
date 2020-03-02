import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

const TimerInputError = (props) => {
    const { text } = props;
    return (
        <Text style={styles.redText}>
            {text}
        </Text>
    );
};

TimerInputError.propTypes = {
    text: PropTypes.string
};

export default TimerInputError;