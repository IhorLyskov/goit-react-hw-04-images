export const constAxios = {
  KEY: process.env.REACT_APP_API_KEY,
  PER_PAGE: 12,
  BASE_URL: 'https://pixabay.com/api/',
};

export const errorMessages = {
  messageNoImages:
    'Sorry, there are no images matching your search query. Please try again.',
  messageNetError: 'Sorry, net error. Please try again.',
};
