import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter', () => {
  it('renders initial count', () => {
    render(<Counter />)
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument()
  })

  it('increments count', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('+'))
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument()
  })

  it('decrements count', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('-'))
    expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument()
  })
})