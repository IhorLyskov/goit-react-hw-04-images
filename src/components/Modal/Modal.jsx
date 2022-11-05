import { useEffect } from 'react';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

function Modal({ item: { largeImageURL, tags }, onClose }) {
  const handleEscapePress = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapePress);
    return () => {
      window.removeEventListener('keydown', handleEscapePress);
    };
  });

  return createPortal(
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
}

Modal.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onClose: PropTypes.func,
};

export default Modal;
