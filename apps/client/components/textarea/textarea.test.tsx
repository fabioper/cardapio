import { render, screen } from '@testing-library/react'
import Textarea from '@/components/textarea/textarea'
import userEvent, { UserEvent } from '@testing-library/user-event'

describe('Component: Textarea', () => {
  let user: UserEvent

  beforeEach(() => (user = userEvent.setup()))

  it('should render', () => {
    render(<Textarea />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should call onChange', async () => {
    const onChangeCallback = jest.fn()
    render(<Textarea onChange={onChangeCallback} />)

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement

    const text = 'hello world'
    await user.type(textarea, text)

    expect(onChangeCallback).toHaveBeenCalledTimes(text.length)
    expect(textarea.value).toBe(text)
  })
})
