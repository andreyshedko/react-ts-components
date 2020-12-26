import React from "react";

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AccordionComponent } from "./accordion.component";

configure({ adapter: new Adapter() });

describe("Accordion Component", () => {
    test("should display items", async () => {
        const component = renderer.create(
            <AccordionComponent
                items={
                    [
                        {
                            title: 'Test Title 1',
                            body: {
                                title: 'Body Title 1',
                                element: 'sasasasasasasass'
                            },
                            isOpened: false
                        },
                        {
                            title: 'Test Title 2',
                            body: {
                                title: 'Body Title 2',
                                element: <>React Node</>
                            },
                            isOpened: false
                        }
                    ]
                } />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});