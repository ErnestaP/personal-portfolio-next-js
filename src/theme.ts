import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { MuseoModerno, Poppins, Khula } from 'next/font/google';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100'],
});

const khula = Khula({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'],
});

const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: museoModerno.style.fontFamily,
      backgroundColor: '#ebedea',
      color: '#000',
      _dark: {
        backgroundColor: '#000',
        color: '#FFF',
      },
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: '#FFF' },
        secondary: { value: '#113bc3' },
        active: { value: '#EFC946' },
      },
      fonts: {
        heading: { value: museoModerno.style.fontFamily },
        body: { value: museoModerno.style.fontFamily },
        initialTitle: { value: poppins.style.fontFamily },
        cardFont: { value: khula.style.fontFamily },
      },
      fontSizes: {
        smallTitle: { value: '2.4rem' },
        mediumTitle: { value: '3.125rem' },
        largeTitle: { value: '3.75rem' },
        extraLargeTitle: { value: '5rem' },
        extraExtraLargeTitle: { value: '7.5rem' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
