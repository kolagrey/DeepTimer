import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const ButtonContainer = (props) => {
    return (
        <View style={styles.controlButtonContainer}>
            {props.children}
        </View>
    );
};

export default ButtonContainer;