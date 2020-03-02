import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from '../styles';

const ButtonControl = (props) => {
    const { disabled, speed, controlSpeed, buttonAction, buttonText } = props;
    return (
        <Button disabled={disabled} style={speed === controlSpeed ? styles.activeSpeedButton : styles.inActiveSpeedButton} contentStyle={styles.speedButtonContentStyle} mode="outlined" onPress={() => buttonAction({ speed: controlSpeed })}>
            {buttonText}
        </Button>
    );
};

ButtonControl.propTypes = {
    disabled: PropTypes.bool,
    speed: PropTypes.number,
    controlSpeed: PropTypes.number,
    buttonAction: PropTypes.func,
    buttonText: PropTypes.string
};

export default ButtonControl;