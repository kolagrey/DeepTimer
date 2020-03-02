import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import BlinkingText from './BlinkingText';
import styles from '../styles';

const TimerDisplay = (props) => {
    const { timerDisplay, turnRed, startBlinking } = props;

    const getStyle = (style, isRed = false) => {
        if (isRed) {
            return style.timerTextRed;
        }
        return style.timerTextBlack;
    };

    return (
        <View style={styles.timerTextDisplayArea}>
            {startBlinking ?
                <BlinkingText text={timerDisplay} style={getStyle(styles, turnRed)} /> :
                <Text style={getStyle(styles, turnRed)}>{timerDisplay}</Text>
            }
        </View>
    );
};

TimerDisplay.propTypes = {
    timerDisplay: PropTypes.string,
    turnRed: PropTypes.bool,
    startBlinking: PropTypes.bool
};

export default TimerDisplay;