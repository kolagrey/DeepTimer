import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const ButtonGrid = (props) => {
    return(
        <View style={styles.speedControlButtonArea}>
            { props.children }
        </View>
    );
};

export default ButtonGrid;