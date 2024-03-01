export function formatCurrency(value: number, currency: string = 'BRL') {
  let currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })

  return currencyFormatter.format(value)
}
