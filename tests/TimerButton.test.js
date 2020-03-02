import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerButton from '../components/TimerButton';


describe('<TimerButton/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerButton/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View (Button)'", () => {
        const tree = renderer
            .create(
                <TimerButton />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerButton>
                    <Text>
                        Hello Test
                    </Text>
                </TimerButton>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});