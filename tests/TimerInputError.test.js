import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TimerInputError from '../components/TimerInputError';

describe('<TimerInputError/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TimerInputError/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <TimerInputError />,
            ).toJSON();
        expect(tree.type).toBe('Text');
    });

    it('has style of color red', () => {
        const tree = renderer
            .create(
                <TimerInputError/>,
            ).toJSON();
        expect(tree.props.style.color).toBe('red')
    });
});