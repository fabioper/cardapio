import { create } from 'zustand'
import { z } from 'zod'

export const Customer = z.object({
  name: z.string().min(1),
  phone: z
    .string()
    .length(11)
    .regex(/^[0-9]*$/),
})

export type Customer = z.infer<typeof Customer>

export const Delivery = z.object({
  address: z.string().min(1),
  postalCode: z
    .string()
    .length(8)
    .regex(/^[0-9]*$/),
  addressNumber: z.string().min(1),
  district: z.string().min(1),
  city: z.string().min(1),
  complement: z.string().optional(),
})

export type Delivery = z.infer<typeof Delivery>

export enum PaymentMethod {
  Pix = 'pix',
  Card = 'card',
  Cash = 'cash',
}

export const Payment = z.object({
  method: z.nativeEnum(PaymentMethod),
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
    method: PaymentMethod.Card,
  },
  setCustomer: customer => set(state => ({ ...state, customer })),
  setDelivery: delivery => set(state => ({ ...state, delivery })),
  setPayment: payment => set(state => ({ ...state, payment })),
}))
