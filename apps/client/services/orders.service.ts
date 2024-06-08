import { z } from 'zod'
import { api } from '@/services/api'

export enum PaymentMethod {
  Pix = 'pix',
  Card = 'card',
  Cash = 'cash',
}

const addOrderSchema = z.object({
  customer: z.object({
    name: z.string(),
    phone: z.string(),
  }),
  payment: z.object({
    method: z.nativeEnum(PaymentMethod),
  }),
  items: z.array(
    z.object({
      quantity: z.number(),
      productId: z.string(),
      complement: z.string().optional(),
    }),
  ),
})

export type AddOrderDto = z.infer<typeof addOrderSchema>

export async function addOrder(order: AddOrderDto) {
  const { data } = await api.post('/orders', order)
  return data
}
