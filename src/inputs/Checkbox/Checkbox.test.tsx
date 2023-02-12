import React from 'react';
import {render, fireEvent} from '@testing-library/preact';
import Checkbox from './Checkbox';
import {h} from 'preact'

describe('Checkbox', () => {
    it('should call onChange when clicked', () => {
        const onChange = jest.fn();
        const {getByLabelText} = render(<Checkbox label='label' onChange={onChange} />);
        const checkbox = getByLabelText('label');
        fireEvent.click(checkbox);
        expect(onChange).toHaveBeenCalled();
    });

    it('should not call onChange when disabled', () => {
        const onChange = jest.fn();
        const {getByLabelText} = render(<Checkbox label='label' disabled onChange={onChange} />);
        const checkbox = getByLabelText('label');
        fireEvent.click(checkbox);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should change checked state when clicked', () => {
        const {getByLabelText} = render(<Checkbox label='label' />);
        const checkbox = getByLabelText('label');
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(false);
    });
});