import { Component } from 'react';
import { OverlayStyled, ModalStyled } from './Modal.styled';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapePress);
  }

  handleEscapePress = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.item;
    return (
      <Portal node={modalRoot}>
        <OverlayStyled onClick={this.handleBackdropClick}>
          <ModalStyled>
            <img src={largeImageURL} alt={tags} />
          </ModalStyled>
        </OverlayStyled>
      </Portal>
    );
  }
}

Modal.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onClose: PropTypes.func,
};

export default Modal;
