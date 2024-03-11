import { PropsWithParams } from '@/utils/types'
import EditCartItem from '@/app/pedido/[itemId]/edit-cart-item'

export default function EditCartItemPage({
  params,
}: PropsWithParams<{ itemId: string }>) {
  return <EditCartItem itemId={params.itemId} />
}
