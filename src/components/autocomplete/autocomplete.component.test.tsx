import React from "react";

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AutocompleteComponent } from "./autocomplete.component";

configure({ adapter: new Adapter() });

describe("Autocompplete Component", () => {
    test("should display component", async () => {
        const component = renderer.create(
            <AutocompleteComponent
                suggestions={['Kiev', 'Kirov', 'Moscow', 'Minsk', 'Prague']}
                onValueSelected={jest.fn()}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});