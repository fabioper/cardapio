import { create } from 'zustand'
import { z } from 'zod'

export const Customer = z.object({
  name: z.string().min(1),
  phone: z
    .string()
    .max(11)
    .min(11)
    .regex(/[0-9]+/),
})

export type Customer = z.infer<typeof Customer>

export const Delivery = z.object({
  address: z.string(),
  postalCode: z.string().max(8),
  addressNumber: z.string(),
  district: z.string(),
  city: z.string(),
  complement: z.string().optional(),
})

export type Delivery = z.infer<typeof Delivery>

export const Payment = z.object({
  method: z.enum(['pix', 'card', 'cash']),
})

export type Payment = z.infer<typeof Payment>

interface CheckoutState {
  customer: Customer
  delivery: Delivery
  payment: Payment
  setCustomer: (customer: Customer) => void
  setDelivery: (delivery: Delivery) => void
  setPayment: (payment: Payment) => void
}

export const useCheckout = create<CheckoutState>(set => ({
  customer: {
    name: '',
    phone: '',
  },
  delivery: {
    address: '',
    city: '',
    addressNumber: '',
    district: '',
    postalCode: '',
    complement: '',
  },
  payment: {
    method: 'card',
  },
  setCustomer: customer => set(state => ({ ...state, customer })),
  setDelivery: delivery => set(state => ({ ...state, delivery })),
  setPayment: payment => set(state => ({ ...state, payment })),
}))
