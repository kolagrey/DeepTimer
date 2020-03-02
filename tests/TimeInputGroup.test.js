import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerInputGroup from '../components/TimerInputGroup';

describe('<TimerInputGroup/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerInputGroup/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerInputGroup />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerInputGroup>
                    <Text>
                        Hello Test
                    </Text>
                </TimerInputGroup>,
            ).toJSON();
        expect(tree.children.length).toBe(1)
    });
});