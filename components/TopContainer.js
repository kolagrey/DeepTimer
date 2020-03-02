import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../styles';

const TopContainer = (props) => {
    return (
        <SafeAreaView style={styles.topContainer}>
            {props.children}
        </SafeAreaView>
    );
};


export default TopContainer;