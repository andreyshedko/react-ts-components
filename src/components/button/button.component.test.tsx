import React from "react";

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ButtonComponent } from "./button.component";

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe("Button Component", () => {
  test("should display info severity state", async () => {
    const component = renderer.create(
      <ButtonComponent
        severity={"info"}
        text={"test"}
        onClick={() => { }}
        onKeyDown={() => { }}
        onFocus={() => { }}
        onBlur={() => { }} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display warning severity state", async () => {
    const component = renderer.create(
      <ButtonComponent
        severity={"warning"}
        text={"test"}
        onClick={() => { }}
        onKeyDown={() => { }}
        onFocus={() => { }}
        onBlur={() => { }} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should display danger severity state", async () => {
    const component = renderer.create(
      <ButtonComponent
        severity={"danger"}
        text={"test"}
        onClick={() => { }}
        onKeyDown={() => { }}
        onFocus={() => { }}
        onBlur={() => { }} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("fire click event", async () => {
    const wrapper = shallow(<ButtonComponent
      severity={"danger"}
      text={"test"}
      onClick={mockFn}
      onKeyDown={() => { }}
      onFocus={() => { }}
      onBlur={() => { }} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test("fire keydown event", async () => {
    const wrapper = shallow(<ButtonComponent
      severity={"danger"}
      text={"test"}
      onClick={() => {}}
      onKeyDown={mockFn}
      onFocus={() => { }}
      onBlur={() => { }} />);
    wrapper.simulate('keydown');
    expect(mockFn).toHaveBeenCalled();
  });

}); 