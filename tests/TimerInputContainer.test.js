import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerInputContainer from '../components/TimerInputContainer';

describe('<TimerInputContainer/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerInputContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerInputContainer />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerInputContainer>
                    <Text>
                        Hello Test
                    </Text>
                </TimerInputContainer>,
            ).toJSON();
        expect(tree.children.length).toBe(1)
    });
});