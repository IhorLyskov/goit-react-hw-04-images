const fontSizes = [12, 14, 16, 20, 24, 32, 64];
fontSizes.xs = fontSizes[0];
fontSizes.s = fontSizes[1];
fontSizes.m = fontSizes[2];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

export const theme = {
  colors: {
    colorText: '#fff',
    colorError: 'red',
    colorAcent: '#3f51b5',
    colorKeyHover: '#303f9f',
  },
  fontSizes: {
    fontSizePlaceHolder: 18,
    fontSizeInput: 20,
    fontSizeMessage: 30,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  heights: {
    lineHeight: 24,
    heightHeader: 40,
    heightSearchBtn: 48,
    heightImg: 260,
    heightModal: 'calc(100vh - 24px)',
  },
  widthes: {
    widthSearchBtn: 48,
    minWidthButton: 180,
    maxWidthButton: 200,
    widthSearchForm: 600,
    widthImg: '100%',
    widthModal: 'calc(100vw - 48px)',
    widthGalleryColumn: 'minmax(320px, 1fr)',
  },
  space: {
    radiusButton: 2,
    radiusGalleryItem: 2,
    radiusSearchForm: 3,
    paddingGorInput: 4,
    paddingLeftInputError: 4,
    paddingRightInputError: 6,
    paddingVerButton: 8,
    paddingGorButton: 16,
    paddingVerHeader: 12,
    paddingGorHeader: 24,
    paddingBottomContainer: 24,
    marginTopContainer: 10,
    gridGapGallery: 16,
    gridTemplateColumns: '1fr',
  },
};
