import { ComponentProps } from 'react'
import { ToastContainer, ToastDescription } from './styles'
import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title?: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastComponent.Provider swipeDirection="right">
      <ToastContainer {...props}>
        {title && (
          <ToastComponent.Title asChild>
            <Heading size="sm">{title}</Heading>
          </ToastComponent.Title>
        )}
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>
        <ToastComponent.Close aria-label="Close" asChild>
          <Button variant="tertiary">
            <X weight="light" size={20} />
          </Button>
        </ToastComponent.Close>
      </ToastContainer>
      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
