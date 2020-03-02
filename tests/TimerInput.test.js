import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerInput from '../components/TimerInput';

describe('<TimerInput/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerInput/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerInput />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });
});