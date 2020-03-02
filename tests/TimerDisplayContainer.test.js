import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerDisplayContainer from '../components/TimerDisplayContainer';

describe('<TimerDisplayContainer/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerDisplayContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerDisplayContainer />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerDisplayContainer>
                    <Text>
                        Hello Test
                    </Text>
                </TimerDisplayContainer>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});