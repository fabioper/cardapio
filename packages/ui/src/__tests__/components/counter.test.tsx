import userEvent, { UserEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { ComponentProps, useCallback, useState } from 'react'
import { Counter } from '../../components'

function CounterWrapper(props: ComponentProps<typeof Counter>) {
  const [value, setValue] = useState(props.value)

  const onChange = useCallback(
    (newValue: number | undefined) => {
      setValue(newValue)
      props.onChange?.(newValue)
    },
    [props],
  )

  return <Counter {...props} value={value} onChange={onChange} />
}

describe('Component: Counter', () => {
  let user: UserEvent

  beforeEach(() => (user = userEvent.setup()))

  it('should render', () => {
    render(<CounterWrapper />)

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })

  it('should call onChange callback', async () => {
    const onChange = jest.fn()

    render(<CounterWrapper onChange={onChange} />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement
    const value = '123'

    await user.type(inputNumber, value)

    expect(onChange).toHaveBeenCalledTimes(value.length)
    expect(onChange).toHaveBeenCalledWith(Number(value))
  })

  it('should increase value when add button is clicked', async () => {
    render(<CounterWrapper />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement
    const increaseButton = screen.getByTestId('increaseButton')

    await user.click(increaseButton)
    await user.click(increaseButton)
    await user.click(increaseButton)

    expect(inputNumber.value).toBe('3')
  })

  it('should decrease value when remove button is clicked', async () => {
    render(<CounterWrapper />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '5')

    const decreaseButton = screen.getByTestId('decreaseButton')

    await user.click(decreaseButton)
    await user.click(decreaseButton)
    await user.click(decreaseButton)

    expect(inputNumber.value).toBe('2')
  })

  it('should disable decrease button when value is zero', async () => {
    render(<CounterWrapper />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '3')

    const decreaseButton = screen.getByTestId('decreaseButton')

    await user.click(decreaseButton)
    await user.click(decreaseButton)
    await user.click(decreaseButton)

    expect(inputNumber.value).toBe('0')
    expect(decreaseButton).toBeDisabled()
  })

  it('should disable decrease button when value is equals to given minimum', async () => {
    render(<CounterWrapper min={2} />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '3')

    const decreaseButton = screen.getByTestId('decreaseButton')

    await user.click(decreaseButton)

    expect(inputNumber.value).toBe('2')
    expect(decreaseButton).toBeDisabled()
  })

  it('should disable increase button when value is equals to given maximum', async () => {
    render(<CounterWrapper max={5} />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '4')

    const increaseButton = screen.getByTestId('increaseButton')

    await user.click(increaseButton)

    expect(inputNumber.value).toBe('5')
    expect(increaseButton).toBeDisabled()
  })

  it('should have default value', async () => {
    render(<CounterWrapper defaultValue={5} />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    expect(inputNumber.value).toBe('5')
  })

  it('should not accept non numeric values', async () => {
    render(<CounterWrapper />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '123a!df')

    expect(inputNumber.value).toBe('123')
  })

  it('should not accept changes when disabled is set', async () => {
    render(<CounterWrapper defaultValue={5} disabled />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    await user.type(inputNumber, '8')

    expect(inputNumber.value).toBe('5')
  })

  it('should show remove button when value is 1 and removable is true', async () => {
    render(<CounterWrapper value={3} removable />)

    const inputNumber = screen.getByRole('spinbutton') as HTMLInputElement

    const decreaseButton = screen.getByTestId('decreaseButton')

    await user.click(decreaseButton)
    await user.click(decreaseButton)

    expect(inputNumber.value).toBe('1')
    expect(screen.queryByTestId('decreaseButton')).not.toBeInTheDocument()
    expect(screen.queryByTestId('removeButton')).toBeInTheDocument()
  })

  it('should show remove button when value is 1 and removable is true', async () => {
    const callback = jest.fn()
    render(<CounterWrapper value={1} removable onRemove={callback} />)

    const removeButton = screen.getByTestId('removeButton')

    await user.click(removeButton)

    expect(callback).toHaveBeenCalled()
  })
})
