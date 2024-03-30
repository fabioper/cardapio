import { render, screen } from '@testing-library/react'
import TextInput from '../../components/text-input'

describe('Component: Input', () => {
  it('should render successfully', () => {
    render(<TextInput />)

    expect(screen.queryByRole('textbox')).toBeInTheDocument()
  })
})
