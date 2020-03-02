import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from '../styles';

const TimerButton = (props) => {
    const { started, start, kill } = props;
    return (
        <Button
            contentStyle={styles.startButtonContentStyle}
            style={started ? styles.stopButton : styles.startButton}
            icon={started ? 'delete' : 'timer'}
            mode="contained"
            onPress={started ? () => kill() : () => start()}>
            {started ? 'Stop' : 'Start'}
        </Button>
    );
};

TimerButton.propTypes = {
    started: PropTypes.bool,
    start: PropTypes.func,
    kill: PropTypes.func
};

export default TimerButton;