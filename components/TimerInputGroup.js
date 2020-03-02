import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const TimerInputGroup = (props) => {
    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    );
};

export default TimerInputGroup;