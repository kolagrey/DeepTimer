import React, { Component } from 'react';
import { Vibration } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Audio } from 'expo-av';

// Custom Components
import TopContainer from './components/TopContainer';
import TimerInputGroup from './components/TimerInputGroup';
import TimerInputContainer from './components/TimerInputContainer';
import TimerButtonContainer from './components/TimerButtonContainer';
import TimerInput from './components/TimerInput';
import TimerButton from './components/TimerButton';
import TimerInputError from './components/TimerInputError';
import TimerDisplay from './components/TimerDisplay';
import TimerControl from './components/TimerControl';
import TimerDisplayView from './components/TimerDisplayView';
import TimerDisplayContainer from './components/TimerDisplayContainer';
import TimerStatusDisplay from './components/TimerStatusDisplay';
import ButtonContainer from './components/ButtonContainer';
import ButtonGrid from './components/ButtonGrid';
import ButtonControl from './components/ButtonControl';

// Sound File
const source = require('./assets/sound/alarm.mp3');

// Constants
import { INVALID_INPUT_TEXT, MORE_THAN_HALF_TEXT, TIME_UP_TEXT, VIBRATION_PATTERN, ALMOST_DONE_TEXT } from './constants';

// Theme Configuration
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: 'purple'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.chronos = null; // SetInterval variable
    this.alarm = null; // Initial value for alarm controller
    this.state = {
      duration: '', // Length of countdown (collected as string but converted to )
      seconds: 60, // Number of seconds in a minute
      start: 0, // Starting value of count down (will be derived from the converted value of duration)
      speed: 1, // Initial countdown interval speed
      started: false, // Variable for countdown start/stop state
      paused: false, // Variable for countdown pause/play state
      turnRed: false, // Variable for countdown display text colour style state
      startBlinking: false, // Variable for countdown display text blinking state
      timerDisplay: '00:00', // Initial countdown timer display value 
      timerStatusText: '', // Initial value for time status display
      countdownInputErrorText: '', // Initial value for timer input error text
      countdownTextInputHasError: false // Initial value for time input error state
    };

    // Bind (this) to current component class function that is shared with other components
    this.changeSpeed = this.changeSpeed.bind(this);
    this.playTimer = this.playTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.killTimer = this.killTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.onCountDownInputChange = this.onCountDownInputChange.bind(this);
  }

  async soundAlarm() {
    // Load the audio file into memory for future quick play
    const { sound } = await Audio.Sound.createAsync(
      source,
      {
        shouldPlay: true,
        isLooping: true
      },
      null,
    );
    this.alarm = sound;
    this.alarm.playAsync();
  }

  stopAlarm() {
    setTimeout(() => {
      this.alarm.stopAsync();
    }, 5000);
  }

  // Middleware to check if the countdown cycle, and set status based on criteria
  countdownStatusMiddleware({ start, duration, seconds }) {
    if (duration === 1) {
      if (seconds <= 10) {
        this.setState({
          timerStatusText: ALMOST_DONE_TEXT
        });
      }
      if (seconds < 30 && seconds > 10) {
        this.setState({
          timerStatusText: MORE_THAN_HALF_TEXT
        });
      }
    } else {
      if (!(duration % 2)) {
        if ((duration / 2) > start) {
          this.setState({
            timerStatusText: MORE_THAN_HALF_TEXT
          });
        }
      } else {
        if ((parseInt((duration / 2), 10)) === start && seconds < 30) {
          this.setState({
            timerStatusText: MORE_THAN_HALF_TEXT
          });
        }

        if (start === 0 && seconds <= 10) {
          this.setState({
            timerStatusText: ALMOST_DONE_TEXT
          });
        }
      }
    }
  }

  // Middleware to check if the countdown is within 20 seconds of ending
  lessThanTwentyMiddleware({ start, seconds }) {
    if (start === 0) {
      if (seconds < 20 && seconds > 10) {
        this.setState({
          turnRed: true
        });
      }
    }
  }

  // Middleware to check if the countdown is at 10 seconds of ending
  lessThanTenMiddleware({ start, seconds }) {
    if (start === 0 && seconds === 10) {
      Vibration.vibrate(); // Warning vibration
      this.setState({
        startBlinking: true
      });
    }
  }


  // Middleware to check if the countdown has completed it's cycle
  timeUpMiddleware({ start }) {
    if (start < 0) {
      this.setState({
        timerStatusText: TIME_UP_TEXT,
        started: false
      });
      clearInterval(this.chronos);
    }
  }

  // Countdown Logic
  countdown() {
    // Set interval rate
    let interval = Math.floor(1000 / this.state.speed);

    // Assign a variable to setInterval to it can be destroyed when needed
    this.chronos = setInterval(() => {

      // Start by reducing seconds by 1, and subsequently until countdown is completed
      this.setState({
        seconds: this.state.seconds - 1,
      });

      // Update the countdown display
      this.setState({
        timerDisplay: this.state.start < 0 ? '00:00' : `${this.state.start > 9 ? this.state.start : '0' + this.state.start}:${this.state.seconds >= 10 ? Math.floor(this.state.seconds) : '0' + Math.floor(this.state.seconds)}`
      });

      // Middleware 1 - Are we there yet?
      this.countdownStatusMiddleware({
        start: this.state.start,
        duration: parseInt(this.state.duration, 10),
        seconds: this.state.seconds
      });

      // Middleware 2 - Less than twenty
      this.lessThanTwentyMiddleware({
        start: this.state.start,
        seconds: this.state.seconds
      });

      // Middleware 3 - Is it ten seconds to end?
      this.lessThanTenMiddleware({
        start: this.state.start,
        seconds: this.state.seconds
      });

      // Check if seconds has reached zero, then reduce start value by 1 and reset second back to 60
      // in order to start on the next minute if countdown isn't done
      if (this.state.seconds <= 0) {
        this.setState(prevState => ({
          start: prevState.start - 1,
          seconds: 60
        }));
      }

      // Middleware 4 - Is it time up?
      this.timeUpMiddleware({
        start: this.state.start
      });

      // Check if start is less than zero (end of countdown) and end timer
      if (this.state.start < 0) {
        this.soundAlarm();
        Vibration.vibrate(VIBRATION_PATTERN);
        clearInterval(this.chronos);
        this.setState({
          speed: 1,
          turnRed: false,
          startBlinking: false,
          started: false,
          timerDisplay: '00:00'
        });
        this.stopAlarm();
      }

      // Countdown interval speed
    }, interval);
  }

  // Countdown Ignition
  startTimer() {
    if (this.state.duration) {
      this.setState({
        start: parseInt(this.state.duration, 10) - 1, // convert duration to number to get countdown start value
        started: true,
        timerStatusText: ''
      });
      this.countdown();
    } else {
      this.setState({
        countdownInputErrorText: INVALID_INPUT_TEXT,
        countdownTextInputHasError: true
      });
    }

  }

  // Change speed of timer interval
  changeSpeed({ speed = 1 }) {
    this.stopTimer();
    this.setState({
      speed: speed
    }, () => {
      this.resumeTimer();
    });
  }

  // Play timer
  playTimer() {
    this.resumeTimer();
    this.setState(prevState => ({
      paused: !prevState.paused
    }));
  }

  // Pause timer
  pauseTimer() {
    clearInterval(this.chronos);
    this.setState(prevState => ({
      paused: !prevState.paused
    }));
  }

  // Resume timer
  resumeTimer() {
    this.countdown();
  }

  // Stop timer
  stopTimer() {
    clearInterval(this.chronos);
  }

  // Stop timer and reset state
  killTimer() {
    this.stopTimer();
    this.setState({
      duration: '',
      seconds: 60,
      start: 0,
      speed: 1,
      started: false,
      paused: false,
      turnRed: false,
      startBlinking: false,
      timerDisplay: '00:00',
      timerStatusText: ''
    });
  }

  // Get value for countdown duration from input
  onCountDownInputChange({ duration }) {
    const _duration = parseInt(duration, 10);
    if (duration.indexOf('.') !== -1 || isNaN(_duration) || _duration < 1 || _duration > 60) {
      this.setState({ duration: '', countdownTextInputHasError: true, countdownInputErrorText: INVALID_INPUT_TEXT });
    } else {
      this.setState({ duration, countdownTextInputHasError: false });
    }
  }

  render() {
    // Extract state variables for easier access using object deconstruction
    const {
      speed, paused, timerDisplay, timerStatusText,
      started, countdownTextInputHasError, duration,
      countdownInputErrorText, turnRed, startBlinking
    } = this.state;
    return (
      <PaperProvider theme={theme}>
        <TopContainer>
          <TimerInputGroup>
            <TimerInputContainer>
              <TimerInput
                label='Countdown (Minutes)'
                hasError={countdownTextInputHasError}
                disabled={started}
                duration={duration}
                changeInput={this.onCountDownInputChange}
              />
              {countdownTextInputHasError && <TimerInputError text={countdownInputErrorText} />}
            </TimerInputContainer>
            <TimerButtonContainer>
              <TimerButton
                started={started}
                kill={this.killTimer}
                start={this.startTimer}
              />
            </TimerButtonContainer>
          </TimerInputGroup>
        </TopContainer>
        <TimerStatusDisplay
          timerStatusText={timerStatusText}
        />
        <TimerDisplayContainer>
          <TimerDisplayView>
            <TimerDisplay
              turnRed={turnRed}
              startBlinking={startBlinking}
              timerDisplay={timerDisplay}
            />
            {started && <TimerControl
              paused={paused}
              play={this.playTimer}
              pause={this.pauseTimer}
            />}
          </TimerDisplayView>
          <ButtonContainer>
            <ButtonGrid>
              <ButtonControl
                speed={speed}
                controlSpeed={1}
                disabled={!started || paused}
                buttonText="1X"
                buttonAction={this.changeSpeed}
              />
            </ButtonGrid>
            <ButtonGrid>
              <ButtonControl
                speed={speed}
                controlSpeed={1.5}
                disabled={!started || paused}
                buttonText="1.5X"
                buttonAction={this.changeSpeed}
              />
            </ButtonGrid>
            <ButtonGrid>
              <ButtonControl
                speed={speed}
                controlSpeed={2}
                disabled={!started || paused}
                buttonText="2X"
                buttonAction={this.changeSpeed}
              />
            </ButtonGrid>
          </ButtonContainer>
        </TimerDisplayContainer>
      </PaperProvider>
    );
  }
}

export default App;

