import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';


describe('TextField', () => {


    it('should call onChange handler when typing onto it', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(
          <TextField value={''} name={''} placeholder={'test-placeholder'} onChange={onChange} label={''} id={''} />
        );
        const input = getByPlaceholderText('test-placeholder');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(onChange).toHaveBeenCalled();
      });

  it('should not call onChange handler when TextField is disabled', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<TextField value={''} onChange={onChange} disabled name={''} placeholder={'test-placeholder'} label={''} id={''} />);
    const input = getByPlaceholderText('test-placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should have specific (depends on how you name it) className active when TextField is focused', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(<TextField value={''} onChange={onChange} disabled={false} name={''} placeholder={'test-placeholder'} label={'test'} id={''} />);
    const input = getByPlaceholderText('test-placeholder');
    fireEvent.focus(input);
    const label = getByLabelText('test');
    expect(label.classList.contains('active')).toBe(true);
  });
});


