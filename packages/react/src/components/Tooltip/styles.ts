import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const TooltipContent = styled('div', {
  visibility: 'hidden',
  minWidth: '$64',
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
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
  },

  variants: {
    position: {
      top: {
        bottom: '120%',
        left: '50%',
        marginLeft: '-60px',

        '&::after': {
          top: '100%',
          left: '50%',
          borderColor: '$gray900 transparent transparent transparent',
        },
      },
      bottom: {
        top: '120%',
        left: '50%',
        marginLeft: '-60px',

        '&::after': {
          bottom: '100%',
          left: '50%',
          borderColor: 'transparent transparent $gray900 transparent',
        },
      },
      left: {
        top: '-5px',
        left: '110%',

        '&::after': {
          top: '45%',
          right: '100%',
          borderColor: 'transparent $gray900 transparent transparent',
        },
      },
      right: {
        top: '-5px',
        right: '110%',

        '&::after': {
          top: '45%',
          left: '107%',
          borderColor: 'transparent transparent transparent $gray900',
        },
      },
    },
  },

  defaultVariants: {
    position: 'top',
  },
})
