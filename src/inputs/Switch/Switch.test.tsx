import React from 'react';
import {render, fireEvent} from '@testing-library/preact';
import Switch from './Switch';
import {h} from 'preact'


describe('Switch', () => {
it('should call onChange when clicked', () => {
const onChange = jest.fn();
const { getByLabelText } = render(<Switch label="label" onChange={onChange} />);
const switchEl = getByLabelText('label');
fireEvent.click(switchEl);
expect(onChange).toHaveBeenCalled();
});

it('should not call onChange when disabled', () => {
const onChange = jest.fn();
const { getByLabelText } = render(<Switch label="label" disabled onChange={onChange} />);
const switchEl = getByLabelText('label');
fireEvent.click(switchEl);
expect(onChange).not.toHaveBeenCalled();
});

it('should change checked state when clicked', () => {
const { getByLabelText } = render(<Switch label="label" />);
const switchEl = getByLabelText('label');
fireEvent.click(switchEl);
expect(switchEl.checked).toBe(true);
fireEvent.click(switchEl);
expect(switchEl.checked).toBe(false);
});
});