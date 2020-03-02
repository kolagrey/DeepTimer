import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
        padding: 20
    },
    inputContainer: { 
        flex: 1, 
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10
    },
    middleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    displayContainer: {
        flex: 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    timerStatusText: {
        fontSize: 24
    },
    timerTextBlack: {
        fontSize: 90,
        fontWeight: '300',
        color: 'black'
    },
    timerTextRed: {
        fontSize: 90,
        fontWeight: '300',
        color: 'red'
    },
    timerDisplayContainer: {
        flex: 1, flexDirection: 'row'
    },
    timerTextDisplayArea: {
        width: 250,
        margin: 5
    },
    timerControltDisplayArea: {
        width: 100
    },
    startButton: {
        margin: 10,
        backgroundColor: 'black'
    },
    stopButton: {
        margin: 10,
        backgroundColor: 'red'
    },
    fab: {
        backgroundColor: 'white',
        borderColor: 'black',
        marginTop: 25,
        marginLeft: 16,
        marginRight: 16
    },
    redText: { color: 'red' },
    blinkingText: { color: 'pink' },
    textArea: { width: 200 },
    buttonArea: { width: 140 },
    controlButtonContainer: { flex: 1, flexDirection: 'row' },
    timerControlArea: { margin: 5 },
    speedControlButtonArea: { width: 100, margin: 8 },
    startButtonContentStyle: { minHeight: 50, minWidth: 100 },
    speedButtonContentStyle: { minHeight: 50, minWidth: 100 },
    controlButtonContentStyle: { height: 60, width: 60 },
    controlButton: { marginTop: 50, borderRadius: 50 },
    inActiveSpeedButton: { backgroundColor: 'white', borderColor: 'black' },
    activeSpeedButton: { backgroundColor: 'grey' }
});