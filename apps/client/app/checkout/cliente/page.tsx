import { Button, Page, Title } from '@cardapio/ui/components'
import CustomerForm from '@/app/checkout/cliente/customer-form'
import { BiChevronLeft } from 'react-icons/bi'

export default function CheckoutCustomerPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Button variant="filled" icon={BiChevronLeft} size="small" /> Cliente
      </Title>
      <div className="lg:max-w-2xl">
        <CustomerForm />
      </div>
    </Page>
  )
}
