import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerControl from '../components/TimerControl';


describe('<TimerControl/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerControl/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerControl />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerControl>
                    <Text>
                        Hello Test
                    </Text>
                </TimerControl>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('has a child View (FAB)', () => {
        const tree = renderer
            .create(
                <TimerControl/>,
            ).toJSON();
        expect(tree.children[0].type).toBe('View');
    });
});