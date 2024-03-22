import { Button, Page, Title } from '@cardapio/ui/components'
import CustomerForm from '@/app/checkout/cliente/customer-form'
import { BiChevronLeft } from 'react-icons/bi'

export default function CheckoutCustomerPage() {
  return (
    <Page>
      <Title className="mb-5 flex gap-3 items-center">
        <Button.Text
          icon={BiChevronLeft}
          size="small"
          className="bg-primary-hover bg-opacity-5"
        />{' '}
        Cliente
      </Title>
      <div className="lg:max-w-2xl">
        <CustomerForm />
      </div>
    </Page>
  )
}
