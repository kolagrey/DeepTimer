import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const TimerDisplayContainer = (props) => {
    return (
        <View style={styles.displayContainer}>
            {props.children}
        </View>
    );
};

export default TimerDisplayContainer;