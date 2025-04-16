import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const TooltipContent = styled('div', {
  visibility: 'hidden',
  width: 'max-content',
  maxWidth: '300px',
  whiteSpace: 'normal',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  borderRadius: '$sm',
  padding: '$3',
  position: 'absolute',
  zIndex: '1',

  '&::after': {
    content: '',
    position: 'absolute',
    borderWidth: '5px',
    borderStyle: 'solid',
  },

  variants: {
    position: {
      top: {
        bottom: '120%',
        left: '50%',
        transform: 'translateX(-50%)',

        '&::after': {
          top: '100%',
          left: '50%',
          borderColor: '$gray900 transparent transparent transparent',
          transform: 'translateX(-50%)',
        },
      },
      bottom: {
        top: '120%',
        left: '50%',
        transform: 'translateX(-50%)',

        '&::after': {
          bottom: '100%',
          left: '50%',
          borderColor: 'transparent transparent $gray900 transparent',
          transform: 'translateX(-50%)',
        },
      },
      left: {
        top: '50%',
        right: '110%',
        transform: 'translateY(-50%)',

        '&::after': {
          top: '50%',
          left: '100%',
          borderColor: 'transparent transparent transparent $gray900',
          transform: 'translateY(-50%)',
        },
      },
      right: {
        top: '50%',
        left: '110%',
        transform: 'translateY(-50%)',

        '&::after': {
          top: '50%',
          right: '100%',
          borderColor: 'transparent $gray900 transparent transparent',
          transform: 'translateY(-50%)',
        },
      },
    },
  },

  defaultVariants: {
    position: 'top',
  },
})
