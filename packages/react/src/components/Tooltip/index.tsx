import { ComponentProps, ReactNode, useState } from 'react'
import { TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  id: string
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({
  id = 'tooltip-1',
  children,
  content,
  position = 'top',
}: TooltipProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <TooltipContainer
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      onFocus={() => setIsTooltipVisible(true)}
      onBlur={() => setIsTooltipVisible(false)}
    >
      <div aria-describedby={id} tabIndex={0}>
        {children}
      </div>
      <TooltipContent
        id={id}
        role="tooltip"
        position={position}
        style={{ visibility: isTooltipVisible ? 'visible' : 'hidden' }}
      >
        {content}
      </TooltipContent>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
