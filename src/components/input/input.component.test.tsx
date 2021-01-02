import React from "react";

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { InputComponent } from "./input.component";

configure({ adapter: new Adapter() });

describe("Input Component", () => {
    test("should display component", async () => {
        const component = renderer.create(
            <InputComponent
                type={'text'}
                required={true}
                onClick={jest.fn()}
                onKeyDown={jest.fn()}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});