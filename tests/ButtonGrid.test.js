import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import ButtonGrid from '../components/ButtonGrid';


describe('<ButtonGrid/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<ButtonGrid/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <ButtonGrid />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <ButtonGrid>
                    <Text>
                        Hello Test
                    </Text>
                </ButtonGrid>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});