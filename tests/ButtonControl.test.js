import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import ButtonControl from '../components/ButtonControl';


describe('<ButtonControl/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<ButtonControl/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <ButtonControl />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <ButtonControl>
                    <Text>
                        Hello Test
                    </Text>
                </ButtonControl>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});