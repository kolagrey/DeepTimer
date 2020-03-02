import React from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

const TimerInput = (props) => {
    const { hasError, disabled, duration, label, changeInput } = props;
    return (
        <TextInput
            error={hasError}
            keyboardType={'numeric'}
            disabled={disabled}
            mode='outlined'
            label={label}
            value={duration}
            onChangeText={(duration) => changeInput({ duration })}
        />);
};

TimerInput.propTypes = {
    hasError: PropTypes.bool,
    disabled: PropTypes.bool,
    duration: PropTypes.string,
    label: PropTypes.string,
    changeInput: PropTypes.func
};

export default TimerInput;