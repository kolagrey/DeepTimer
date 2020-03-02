import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const TimerInputContainer = (props) => {
    return (
        <View style={styles.textArea}>
            {props.children}
        </View>
    );
};

export default TimerInputContainer;