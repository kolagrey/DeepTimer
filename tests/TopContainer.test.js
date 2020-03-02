import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import TopContainer from '../components/TopContainer';

describe('<TopContainer/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<TopContainer />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'RCTSafeAreaView'", () => {
        const tree = renderer
            .create(
                <TopContainer />,
            ).toJSON();
        expect(tree.type).toBe('RCTSafeAreaView');
    });

    it('can hold a child', () => {
        const tree = renderer
            .create(
                <TopContainer>
                    <Text>
                        Hello Test
                    </Text>
                </TopContainer>,
            ).toJSON();
        expect(tree.children.length).toBe(1)
    });


});