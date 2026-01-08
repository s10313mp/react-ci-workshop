import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app', () => {
    render(<App />)
    expect(screen.getByText(/Moja Aplikacja React/i)).toBeInTheDocument()
  })

  it('has increment button', () => {
    render(<App />)
    const button = screen.getByText(/count is/i)
    expect(button).toBeInTheDocument()
  })
  it('has custom title', () => {
    render(<App />)
    expect(screen.getByText(/Moja Aplikacja React/i)).toBeInTheDocument()
  })
  it('this test will pass', () => {
    render(<App />)
    expect(screen.getByText(/Moja Aplikacja React/i)).toBeInTheDocument()
  })
})