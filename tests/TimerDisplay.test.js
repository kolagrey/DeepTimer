import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerDisplay from '../components/TimerDisplay';

describe('<TimerDisplay/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerDisplay/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerDisplay />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerDisplay>
                    <Text>
                        Hello Test
                    </Text>
                </TimerDisplay>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});