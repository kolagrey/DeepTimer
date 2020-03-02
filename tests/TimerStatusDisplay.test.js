import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerStatusDisplay from '../components/TimerStatusDisplay';

describe('<TimerStatusDisplay/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerStatusDisplay/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'RCTSafeAreaView'", () => {
        const tree = renderer
            .create(
                <TimerStatusDisplay />,
            ).toJSON();
        expect(tree.type).toBe('RCTSafeAreaView');
    });

    it('has a child', () => {
        const tree = renderer
            .create(
                <TimerStatusDisplay/>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('has a child of <Text> component', () => {
        const tree = renderer
            .create(
                <TimerStatusDisplay/>,
            ).toJSON();
        expect(tree.children[0].type).toBe('Text');
    });
});