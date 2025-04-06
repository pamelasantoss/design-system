import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '$80',
  minHeight: '$20',
  padding: '$3 $5',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
})
