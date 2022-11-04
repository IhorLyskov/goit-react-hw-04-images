import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const scroll = () => {
  window.scrollBy({
    top: window.screen.availHeight + 60,
    behavior: 'smooth',
  });
};

const ImageGallery = ({ galleryItems, isScroll }) => {
  useEffect(() => {
    if (isScroll) {
      scroll();
    }
  }, [isScroll]);

  return (
    <ImageGalleryStyled>
      {galleryItems.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.shape),
  countLoadMore: PropTypes.number,
};

export default ImageGallery;
