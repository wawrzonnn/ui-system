import { render, fireEvent } from '@testing-library/preact';
import TextField from './TextField';
import { h } from 'preact'
import styles from './TextField.module.css'

describe('TextField', () => {
  const props = {
    onChange: jest.fn(),
    label: 'test',
    name: 'test-name',
    placeholder: 'test-placeholder',
    id: 'test-id',
  };

  it('should call onChange handler when typing onto it', () => {
    const { getByPlaceholderText } = render(<TextField {...props} />);
    const input = getByPlaceholderText('test-placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(props.onChange).toHaveBeenCalled();
  });

  it('should not call onChange handler when TextField is disabled', () => {
    const { getByPlaceholderText } = render(<TextField {...props} disabled />);
    const input = getByPlaceholderText('test-placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(props.onChange).not.toHaveBeenCalled();
  });

  it('should have specific (depends on how you name it) className active when TextField is focused', () => {
    const { getByPlaceholderText, getByLabelText } = render(<TextField {...props} />);
    const input = getByPlaceholderText('test-placeholder');
    fireEvent.focus(input);
    const label = getByLabelText('test');
    expect(label.classList.contains('labelActive')).toBe(true);
  });
});