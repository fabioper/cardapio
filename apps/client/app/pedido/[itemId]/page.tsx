import { PropsWithParams } from '@/utils/types'
import EditCartItem from '../../../components/edit-cart-item'

export default function EditCartItemPage({
  params,
}: PropsWithParams<{ itemId: string }>) {
  return <EditCartItem itemId={params.itemId} />
}
