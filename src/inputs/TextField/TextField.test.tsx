/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextField from './TextField'
import styles from './TextField.module.css'

describe('TextField', () => {
	it('should call onChange handler when typing onto it', () => {
		const onChange = jest.fn()
		const { getByPlaceholderText } = render(
			<TextField value={''} name={''} placeholder={'test-placeholder'} onChange={onChange} label={''} id={''} />
		)
		const input = getByPlaceholderText('test-placeholder')
		fireEvent.change(input, { target: { value: 'new value' } })
		expect(onChange).toHaveBeenCalled()
	})

	it('should not call onChange handler when TextField is disabled', () => {
		const onChange = jest.fn()
		const { getByPlaceholderText } = render(
			<TextField
				value={''}
				onChange={onChange}
				disabled
				name={''}
				placeholder={'test-placeholder'}
				label={''}
				id={''}
			/>
		)
		const input = getByPlaceholderText('test-placeholder')
		fireEvent.change(input, { target: { value: 'new value' } })
		expect(onChange).not.toHaveBeenCalled()
	})

	it("should have the 'active' class when focused", () => {
		const { getByPlaceholderText } = render(
			<TextField value='' onChange={() => { } } label='Test' placeholder='Test' id='test' name={''} />
		)

		const input = getByPlaceholderText('Test')
		fireEvent.click(input)
		expect(input.classList.contains(styles.inputFocused)).toBe(true)
	})
})
