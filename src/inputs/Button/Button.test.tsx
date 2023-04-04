/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('calls onClick when clicking on it and it is not disabled', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} variant={'primary'}>
        Click me
      </Button>
    )
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('does not call onClick when it is disabled', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} disabled={true} variant={'primary'}>
        Click me
      </Button>
    )
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows SVG spinner when in loading state', () => {
    const { getByTestId } = render(
      <Button isLoading={true} variant={'primary'} onClick={() => {}}>
        Click me
      </Button>
    )
    const spinner = getByTestId('spinner')
    expect(spinner).toBeDefined()
  })

  it('does not call onClick when it is in loading state', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} isLoading={true} variant={'primary'}>
        Loading
      </Button>
    )
    const button = getByText('Loading')
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})