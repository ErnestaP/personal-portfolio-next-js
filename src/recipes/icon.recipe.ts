import { defineRecipe } from '@chakra-ui/react';

export const iconRecipe = defineRecipe({
  variants: {
    size: {
      sm: { padding: '1', fontSize: '24px' },
      lg: { padding: '2', fontSize: '32px' },
      xl: { padding: '3', fontSize: '58px' },
    },
  },
});
