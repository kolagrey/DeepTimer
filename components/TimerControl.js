import React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from '../styles';

const TimerControl = (props) => {
    const { paused, play, pause } = props;
    return (
        <View style={styles.timerControlArea}>
            <FAB
                style={styles.fab}
                color="black"
                icon={paused ? 'play' : 'pause'}
                onPress={paused ? () => play() : () => pause()}
            />
        </View>
    );
};

TimerControl.propTypes = {
    paused: PropTypes.bool,
    play: PropTypes.func,
    pause: PropTypes.func
};

export default TimerControl;