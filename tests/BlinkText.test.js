import React from 'react';
import renderer from 'react-test-renderer';

import BlinkingText from '../components/BlinkingText';


describe('<BlinkingText/>', () => {

    test('renders correctly', () => {
        const tree = renderer.create(<BlinkingText />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("is of type 'Text'", () => {
        const tree = renderer
            .create(
                <BlinkingText />,
            ).toJSON();
        expect(tree.type).toBe('Text');
    });

    it('displays the text property passed', () => {
        const tree = renderer.create(<BlinkingText text="Blink" />).toJSON();
        expect(tree.children[0]).toBe('Blink');
    });

    it('has a default state show = true', () => {
        const tree = renderer.create(<BlinkingText text="Blink" />);
        expect(tree.root.instance.state.show).toBe(true);
    });

});