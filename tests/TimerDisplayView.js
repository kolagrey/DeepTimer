import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerDisplayView from '../components/TimerDisplayView';

describe('<TimerDisplayView/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerDisplayView/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerDisplayView />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TimerDisplayView>
                    <Text>
                        Hello Test
                    </Text>
                </TimerDisplayView>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});