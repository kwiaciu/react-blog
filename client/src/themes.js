import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Container: {
      // 1. We can update the base styles
      baseStyle: {
        maxWidth: '80ch',
      },
    },

    Tab: {
      _disabled: {
        color: 'pink',
      },
    },

    Button: {
      baseStyle: {
        colorScheme: 'teal',
      },
      focus: {
        outline: '3px solid pink',
      },
      _disabled: {
        color: 'pink',
      },
    },
  },

  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
})

export default theme
