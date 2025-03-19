import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImage />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

Avatar.displayName = 'Avatar'