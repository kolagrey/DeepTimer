import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const TimerButtonContainer = (props) => {
    return (
        <View style={styles.buttonArea}>
            { props.children }
        </View>
    );
};

export default TimerButtonContainer;