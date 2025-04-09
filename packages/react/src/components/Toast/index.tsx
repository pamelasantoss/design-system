import { ComponentProps } from 'react'
import { ToastContainer, ToastDescription, ToastTitle, ToastViewport } from './styles'
import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'
import { useToast } from '../../hooks/useToast'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Toast({ title, description, open, setOpen, ...props }: ToastProps) {
  // const { openToast, setOpenToast } = useToast()

  return (
    <ToastComponent.Provider swipeDirection="right">
      <ToastContainer {...props} open={open} onOpenChange={setOpen} duration={2000}>
        <ToastTitle asChild>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>
        {description && (
          <ToastDescription asChild>
            <Text size="sm">{description}</Text>
          </ToastDescription>
        )}
        <ToastComponent.Close aria-label="Close" asChild>
          <Button variant="tertiary">
            <X weight="light" size={20} />
          </Button>
        </ToastComponent.Close>
      </ToastContainer>
      <ToastViewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
