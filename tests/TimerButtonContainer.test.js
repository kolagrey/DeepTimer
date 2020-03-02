import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerButtonContainer from '../components/TimerButtonContainer';


describe('<TimerButtonContainer/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerButtonContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerButtonContainer />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerButtonContainer>
                    <Text>
                        Hello Test
                    </Text>
                </TimerButtonContainer>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});