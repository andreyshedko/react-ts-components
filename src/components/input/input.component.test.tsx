import React from "react";

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { InputComponent } from "./input.component";
import { CloseIconContainer, ErrorMessageContainer, IconContainer, Input } from "./input.styled.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

configure({ adapter: new Adapter() });

describe("Input Component", () => {
    test("should display component", async () => {
        const component = renderer.create(
            <InputComponent
                type={'text'}
                name={'test'}
                required={true}
                onClick={jest.fn()}
                onKeyDown={jest.fn()}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


    test("should call onChange event", async () => {
        const onChangeMock = jest.fn();
        const event = {
            target: { value: 'test' }
        } as React.ChangeEvent<HTMLInputElement>;
        const component = shallow(
            <InputComponent
                type={'text'}
                name={'testInput'}
                required={true}
                onChange={onChangeMock}
                onClick={jest.fn()}
                onKeyDown={jest.fn()} />);
        component.find(Input).simulate('change', event);
        expect(onChangeMock).toBeCalledWith('test');
    });

    test("should show clear button if text exist in input", async () => {
        const onChangeMock = jest.fn();
        const event = {
            target: { value: 'test' }
        } as React.ChangeEvent<HTMLInputElement>;
        const component = shallow(
            <InputComponent
                type={'text'}
                name={'testInput'}
                required={true}
                showClearIcon={true}
                onChange={onChangeMock}
                onClick={jest.fn()}
                onKeyDown={jest.fn()} />);
        expect(component.find(CloseIconContainer).length).toEqual(0);
        component.find(Input).simulate('change', event);
        expect(component.find(CloseIconContainer)).toBeDefined();
        expect(component.find(CloseIconContainer).find(FontAwesomeIcon)).toBeDefined();
    });

    test("should delete text in input with clear button", async () => {
        const onChangeMock = jest.fn();
        const event = {
            target: { value: 'test' }
        } as React.ChangeEvent<HTMLInputElement>;
        const component = shallow(
            <InputComponent
                type={'text'}
                name={'testInput'}
                required={true}
                showClearIcon={true}
                onChange={onChangeMock}
                onClick={jest.fn()}
                onKeyDown={jest.fn()} />);
        component.find(Input).simulate('change', event);
        expect(component.find(Input).get(0).props.value).toEqual('test')
        const closeButton = component.find(CloseIconContainer);
        expect(closeButton).toBeDefined();
        closeButton.simulate('click', { "target": { "value": '' } });
        expect(component.find(Input).get(0).props.value).toEqual('')

    });

    test("should be diasbled and show spinner icon if showSpinnerIcon={true}", async () => {
        const component = shallow(
            <InputComponent
                type={'text'}
                name={'testInput'}
                required={true}
                showSpinnerIcon={true}
            />);
        expect(component.find(IconContainer)).toBeDefined();
        expect(component.find(Input).get(0).props.disabled).toEqual(true);
    });

    test("should show error message if exists", async () => {
        const component = shallow(
            <InputComponent
                type={'text'}
                name={'testInput'}
                required={true}
                isError={true}
                errorMessage={'Something Happend'}
            />);
        expect(component.find(ErrorMessageContainer)).toBeDefined();
        expect(component.find(ErrorMessageContainer).text()).toEqual('Something Happend');
    });

});