import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const TimerDisplayView = (props) => {
    return (
        <View style={styles.timerDisplayContainer}>
            { props.children }
        </View>
    );
};

export default TimerDisplayView;