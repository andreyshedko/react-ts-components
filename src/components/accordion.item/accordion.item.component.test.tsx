import React from "react";

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AccordionItemComponent } from "./accordion.item.component";

configure({ adapter: new Adapter() });

describe("Accordion Item Component", () => {
    test("should display component", async () => {
        const component = renderer.create(
            <AccordionItemComponent
                config={{
                    title: 'Title',
                    body: {
                        title: 'Sub Title',
                        element: 'element'
                    },
                    isOpened: false
                }}
                isOpened={false}
                onClick={jest.fn()}
                onKeyDown={jest.fn()}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});