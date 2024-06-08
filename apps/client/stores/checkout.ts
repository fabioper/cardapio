import { create } from 'zustand'
import { z } from 'zod'
import { PaymentMethod } from '@/services/orders.service'

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
  clearCheckout: () => void
}

const defaultCustomer = {
  name: '',
  phone: '',
}
const defaultDelivery = {
  address: '',
  city: '',
  addressNumber: '',
  district: '',
  postalCode: '',
  complement: '',
}
const defaultPayment = {
  method: PaymentMethod.Card,
}

const emptyCheckout = {
  customer: defaultCustomer,
  delivery: defaultDelivery,
  payment: defaultPayment,
}

export const useCheckout = create<CheckoutState>(set => ({
  ...emptyCheckout,
  setCustomer: customer => set(state => ({ ...state, customer })),
  setDelivery: delivery => set(state => ({ ...state, delivery })),
  setPayment: payment => set(state => ({ ...state, payment })),
  clearCheckout: () => set(() => emptyCheckout),
}))
