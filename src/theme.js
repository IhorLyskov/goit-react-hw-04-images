const fontSizes = [12, 14, 16, 20, 24, 32, 64];
fontSizes.xs = fontSizes[0];
fontSizes.s = fontSizes[1];
fontSizes.m = fontSizes[2];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

export const theme = {
  colors: {
    colorBlack: '#000',
    colorWhite: '#fff',
    colorText: '#2a2a2a',
    colorError: 'red',
    colorAcent: '#3f51b5',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: fontSizes,
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radius: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
};
