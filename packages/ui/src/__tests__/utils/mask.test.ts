import { mask } from '../../utils/mask'

describe('Utils: Mask', () => {
  it('should mask according to given pattern', () => {
    const phoneMask = mask('21986607894', '(00) 00000-0000')
    const incompletePhoneMask = mask('21986607', '(00) 00000-0000')
    const cpfMask = mask('52485437033', '000.000.000-00')
    const cepMask = mask('25545060', '00000-000')

    expect(phoneMask.value).toBe('(21) 98660-7894')
    expect(incompletePhoneMask.value).toBe('(21) 98660-7')
    expect(cpfMask.value).toBe('524.854.370-33')
    expect(cepMask.value).toBe('25545-060')
  })
})
