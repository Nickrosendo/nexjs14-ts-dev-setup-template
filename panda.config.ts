import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            '50': { value: '#F1F2F4' },
            '100': { value: '#D7DBE0' },
            '200': { value: '#BDC3CC' },
            '300': { value: '#A3ACB8' },
            '400': { value: '#8994A4' },
            '500': { value: '#6F7D90' },
            '600': { value: '#596473' },
            '700': { value: '#434B56' },
            '800': { value: '#2C323A' },
            '900': { value: '#16191D' },
          },
          red: {
            '50': { value: '#FCE9E9' },
            '100': { value: '#F6C0C0' },
            '200': { value: '#F19898' },
            '300': { value: '#EB6F6F' },
            '400': { value: '#E64747' },
            '500': { value: '#E11E1E' },
            '600': { value: '#B41818' },
            '700': { value: '#871212' },
            '800': { value: '#5A0C0C' },
            '900': { value: '#2D0606' },
          },
          orange: {
            '50': { value: '#FCF0E9' },
            '100': { value: '#F6D6C1' },
            '200': { value: '#F0BB98' },
            '300': { value: '#EAA170' },
            '400': { value: '#E58648' },
            '500': { value: '#DF6C20' },
            '600': { value: '#B2561A' },
            '700': { value: '#864113' },
            '800': { value: '#592B0D' },
            '900': { value: '#2D1606' },
          },
          yellow: {
            '50': { value: '#FEF6E7' },
            '100': { value: '#FBE7BB' },
            '200': { value: '#F9D790' },
            '300': { value: '#F7C764' },
            '400': { value: '#F4B739' },
            '500': { value: '#F2A80D' },
            '600': { value: '#C1860B' },
            '700': { value: '#916508' },
            '800': { value: '#614305' },
            '900': { value: '#302203' },
          },
          green: {
            '50': { value: '#E7FDF2' },
            '100': { value: '#BCFBDA' },
            '200': { value: '#91F8C2' },
            '300': { value: '#66F5AA' },
            '400': { value: '#3AF292' },
            '500': { value: '#0FF07A' },
            '600': { value: '#0CC062' },
            '700': { value: '#099049' },
            '800': { value: '#066031' },
            '900': { value: '#033018' },
          },
          teal: {
            '50': { value: '#EAFAFA' },
            '100': { value: '#C5F2F1' },
            '200': { value: '#9FEAE8' },
            '300': { value: '#79E1DF' },
            '400': { value: '#54D9D6' },
            '500': { value: '#2ED1CD' },
            '600': { value: '#25A7A4' },
            '700': { value: '#1C7D7B' },
            '800': { value: '#125452' },
            '900': { value: '#092A29' },
          },
          cyan: {
            '50': { value: '#EDF6F7' },
            '100': { value: '#CDE5EA' },
            '200': { value: '#ADD4DC' },
            '300': { value: '#8DC3CE' },
            '400': { value: '#6DB2C0' },
            '500': { value: '#4DA1B2' },
            '600': { value: '#3D818F' },
            '700': { value: '#2E616B' },
            '800': { value: '#1F4047' },
            '900': { value: '#0F2024' },
          },
          blue: {
            '50': { value: '#E9F3FB' },
            '100': { value: '#C2DCF5' },
            '200': { value: '#9BC6EE' },
            '300': { value: '#73AFE7' },
            '400': { value: '#4C99E1' },
            '500': { value: '#2582DA' },
            '600': { value: '#1D68AF' },
            '700': { value: '#164E83' },
            '800': { value: '#0F3457' },
            '900': { value: '#071A2C' },
          },
          purple: {
            '50': { value: '#EFEBFA' },
            '100': { value: '#D3C6F0' },
            '200': { value: '#B7A2E7' },
            '300': { value: '#9B7DDD' },
            '400': { value: '#7F59D4' },
            '500': { value: '#6334CB' },
            '600': { value: '#4F2AA2' },
            '700': { value: '#3B1F7A' },
            '800': { value: '#281551' },
            '900': { value: '#140A29' },
          },
          pink: {
            '50': { value: '#F9EBF2' },
            '100': { value: '#EFC8DC' },
            '200': { value: '#E4A5C5' },
            '300': { value: '#D981AF' },
            '400': { value: '#CF5E98' },
            '500': { value: '#C43B82' },
            '600': { value: '#9D2F68' },
            '700': { value: '#76234E' },
            '800': { value: '#4F1734' },
            '900': { value: '#270C1A' },
          },
        },

        fonts: {
          body: { value: 'system-ui, sans-serif' },
        },
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.gray.900}' },
          secondary: { value: '{colors.gray.500}' },
          bg: {
            DEFAULT: { value: '{colors.gray.900}' },
            muted: { value: '{colors.gray.100}' },
          },
          color: {
            DEFAULT: { value: '{colors.gray.50}' },
            muted: { value: '{colors.gray.700}' },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
