import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ galleryItems }) => (
  <ImageGalleryStyled>
    {galleryItems.map(item => (
      <ImageGalleryItem key={item.id} item={item} />
    ))}
  </ImageGalleryStyled>
);

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.shape),
};

export default ImageGallery;
