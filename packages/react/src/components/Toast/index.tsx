import { ComponentProps } from 'react'
import { ToastContainer, ToastDescription, ToastTitle, ToastViewport } from './styles'
import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  duration?: number
  closeButton?: boolean
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Toast({ title, description, duration = 2000, closeButton = true, open, setOpen, ...props }: ToastProps) {
  return (
    <ToastComponent.Provider swipeDirection="right">
      <ToastContainer {...props} open={open} onOpenChange={setOpen} duration={duration}>
        <ToastTitle asChild>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>
        {description && (
          <ToastDescription asChild>
            <Text size="sm">{description}</Text>
          </ToastDescription>
        )}
        {closeButton && (
          <ToastComponent.Close aria-label="Close" asChild>
            <Button variant="tertiary" style={{ position: 'absolute', top: 10, right: 10, padding: 0, minWidth: 20, height: 20 }}>
              <X weight="light" size={20} />
            </Button>
          </ToastComponent.Close>
        )}
      </ToastContainer>
      <ToastViewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
