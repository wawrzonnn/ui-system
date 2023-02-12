import React from 'react'
import { render, fireEvent} from '@testing-library/preact'
import Button from './Button'
import { h } from 'preact'
import { getByTestId } from '@testing-library/preact'
describe('Button', () => {
	it('calls onClick when clicking on it and it is not disabled', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
		const button = getByText('Click me')
		fireEvent.click(button)
		expect(onClick).toHaveBeenCalled()
	})

	it('does not call onClick when it is disabled', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Button onClick={onClick} disabled={true}>Click me</Button>)
		const button = getByText('Click me')
		fireEvent.click(button)
		expect(onClick).not.toHaveBeenCalled()
	})

	it('shows SVG spinner when in loading state', () => {
        const { getByTestId } = render(<Button isLoading>Click me</Button>)
        expect(getByTestId('spinner')).toBeDefined()
    })

	it('does not call onClick when it is in loading state', () => {
		const onClick = jest.fn()
		const { getByText } = render(<Button onClick={onClick} isLoading={true}>Loading</Button>)
		const button = getByText('Loading')
		fireEvent.click(button)
		expect(onClick).not.toHaveBeenCalled()
	})
})