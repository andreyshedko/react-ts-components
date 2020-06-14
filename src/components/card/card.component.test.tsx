import React from "react";

import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardComponent } from "./card.component";
import { utils } from "../../utils";
import { actions } from "@storybook/addon-actions";
import { ButtonComponent } from "../button/button.component";

configure({ adapter: new Adapter() });

const eventsFromNames = actions('onClick', 'onKeyDown', 'onFocus', 'onBlur');

describe("Card Component", () => {
  test("should display default card", async () => {
    const component = renderer.create(
      <CardComponent
        title={"test"}
        body={utils.lorem} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display subtitle card", async () => {
    const component = renderer.create(
      <CardComponent
        title={"test"}
        subTitle={'subtitle'}
        body={utils.lorem} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display image", async () => {
    const component = renderer.create(
      <CardComponent
        title={"test"}
        subTitle={'subtitle'}
        body={utils.lorem}
        imgUrl={'https://picsum.photos/200/300'} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display image and buttons", async () => {
    const component = renderer.create(
      <CardComponent
        title={"test"}
        subTitle={'subtitle'}
        body={utils.lorem}
        imgUrl={'https://picsum.photos/200/300'}>
        <ButtonComponent
          text="Long Test"
          severity="info"
          {...eventsFromNames} />

        <ButtonComponent
          text="Test"
          severity="warning"
          {...eventsFromNames} />
      </CardComponent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

}); 