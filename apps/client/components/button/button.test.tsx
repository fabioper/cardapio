import { render, screen } from '@testing-library/react'
import Button from '@/components/button/index'

describe('button', () => {
  it('should render component', () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument()
  })
})
