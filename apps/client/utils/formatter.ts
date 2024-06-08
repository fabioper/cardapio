import { Delivery } from '@/stores/checkout'
import { PaymentMethod } from '@/services/orders.service'

export function formatCurrency(value: number, currency: string = 'BRL') {
  let currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })

  return currencyFormatter.format(value)
}

export function formatAddress(delivery: Delivery) {
  const { address, addressNumber, city, complement, district, postalCode } =
    delivery

  return `${address}, nº ${addressNumber}${complement && ', ' + complement} - ${district}. CEP: ${postalCode}. ${city}`
}

export function formatPaymentMethod(method: PaymentMethod) {
  const labels: Record<PaymentMethod, string> = {
    [PaymentMethod.Card]: 'Cartão de crédito/débito',
    [PaymentMethod.Cash]: 'Dinheiro',
    [PaymentMethod.Pix]: 'Pix',
  }

  return labels[method]
}
