import React from "react";

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BadgeComponent } from "./badge.component";

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe("Button Component", () => {
  test("should display info severity state", async () => {
    const component = renderer.create(
      <BadgeComponent
        severity={"info"}
        text={"test"}
        onClick={mockFn}
        onKeyDown={mockFn} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display warning severity state", async () => {
    const component = renderer.create(
      <BadgeComponent
        severity={"warning"}
        text={"test"}
        onClick={mockFn}
        onKeyDown={mockFn} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display danger severity state", async () => {
    const component = renderer.create(
      <BadgeComponent
        severity={"danger"}
        text={"test"}
        onClick={jest.fn()}
        onKeyDown={jest.fn()} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("fire click event", async () => {
    const wrapper = shallow(<BadgeComponent
      severity={"danger"}
      text={"test"}
      onClick={mockFn}
      onKeyDown={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test("fire keydown event", async () => {
    const wrapper = shallow(<BadgeComponent
      severity={"danger"}
      text={"test"}
      onClick={mockFn}
      onKeyDown={mockFn} />);
    wrapper.simulate('keydown');
    expect(mockFn).toHaveBeenCalled();
  });

}); 