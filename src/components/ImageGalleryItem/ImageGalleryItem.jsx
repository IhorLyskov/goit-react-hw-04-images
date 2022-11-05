import Modal from '../Modal/Modal';
import { useState } from 'react';
import { ImageGalleryItemStyled, ImgStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

function ImageGalleryItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { webformatURL, tags } = item;

  const handleToggleModalOpen = () => setIsModalOpen(prevState => !prevState);

  return (
    <>
      <ImageGalleryItemStyled>
        <ImgStyled
          loading="lazy"
          src={webformatURL}
          alt={tags}
          onClick={handleToggleModalOpen}
        />
      </ImageGalleryItemStyled>
      {isModalOpen && <Modal item={item} onClose={handleToggleModalOpen} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default ImageGalleryItem;
