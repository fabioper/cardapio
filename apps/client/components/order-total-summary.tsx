import { formatCurrency } from '@/utils/formatter'
import { memo } from 'react'

type OrderTotalSummaryProps = {
  subtotal: number
  deliveryFee: number
  total: number
}

function OrderTotalSummary({
  subtotal,
  deliveryFee,
  total,
}: OrderTotalSummaryProps) {
  return (
    <dl className="w-full mt-auto">
      <div className="flex items-center justify-between">
        <dt className="text-sm opacity-75">Sub-total</dt>
        <dd className="text-sm">{formatCurrency(subtotal)}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm opacity-75">Frete</dt>
        <dd className="text-sm">{formatCurrency(deliveryFee)}</dd>
      </div>
      <div className="flex items-center justify-between mt-5">
        <dt className="text-sm opacity-75">Total</dt>
        <dd className="text-base font-bold">{formatCurrency(total)}</dd>
      </div>
    </dl>
  )
}

export default memo(OrderTotalSummary)
