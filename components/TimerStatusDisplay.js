import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

const TimerStatusDisplay = (props) => {
    const { timerStatusText } = props;
    return (
        <SafeAreaView style={styles.middleContainer}>
            <Text style={styles.timerStatusText}>
                {timerStatusText}
            </Text>
        </SafeAreaView>
    );
};

TimerStatusDisplay.propTypes = {
    timerStatusText: PropTypes.string
};

export default TimerStatusDisplay;