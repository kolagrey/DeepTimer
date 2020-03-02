import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import ButtonContainer from '../components/ButtonContainer';


describe('<ButtonContainer/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<ButtonContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'View'", () => {
        const tree = renderer
            .create(
                <ButtonContainer />,
            ).toJSON();
        expect(tree.type).toBe('View');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <ButtonContainer>
                    <Text>
                        Hello Test
                    </Text>
                </ButtonContainer>,
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });
});