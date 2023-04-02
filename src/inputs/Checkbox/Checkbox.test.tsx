import React from 'react';
import {render, fireEvent} from '@testing-library/preact';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
    it('should call onChange when clicked', () => {
        const onChange = jest.fn();
        const {getByLabelText} = render(<Checkbox label='label' onChange={onChange} id={''} name={''} value={''} checked={false} disabled={false} />);
        const checkbox = getByLabelText('label');
        fireEvent.click(checkbox);
        expect(onChange).toHaveBeenCalled();
    });

    it('should not call onChange when disabled', () => {
        const onChange = jest.fn();
        const {getByLabelText} = render(<Checkbox label='label' disabled onChange={onChange} id={''} name={''} value={''} checked={false} />);
        const checkbox = getByLabelText('label');
        fireEvent.click(checkbox);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should change checked state when clicked', () => {
        const {getByLabelText} = render(<Checkbox label='label' id={''} name={''} value={''} checked={false} disabled={false} onChange={undefined} />);
        const checkbox = getByLabelText('label') as HTMLInputElement;
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(false);
    });
});