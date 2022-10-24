import React, { Component } from 'react';
import GlobalStyle from './GlobalStyle/GlobalStyle.styled';

import Searchbar from './Searchbar/Searchbar';
import Container from './Container/Container';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Message from './Message/Message.styled';

import ApiPixabay from './ApiPixabay/ApiPixabay';
import { errorMessages } from './Constants/Constants';

const Pixabay = new ApiPixabay();

class App extends Component {
  state = {
    pictures: [],
    message: null,
    isLoading: false,
    countLoadMore: 0,
  };

  handleSearch = async ({ text }) => {
    this.setState({ isLoading: true });
    this.setState({ message: null });
    this.setState({ pictures: [] });

    Pixabay.query = text;
    Pixabay.resetPage();

    try {
      const { hits, totalHits } = await Pixabay.getPictures();
      if (totalHits === 0) {
        this.setState({ message: errorMessages.messageNoImages });
        return;
      }
      this.setState({
        pictures: hits,
        countLoadMore: totalHits - hits.length,
      });
    } catch {
      if (!this.state.message) {
        this.setState({ message: errorMessages.messageNetError });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMoreButton = async () => {
    this.setState({ isLoading: true });

    try {
      const { hits } = await Pixabay.getPictures();
      this.setState(
        state => ({
          pictures: [...state.pictures, ...hits],
          countLoadMore: state.countLoadMore - hits.length,
        }),
        this.scroll
      );
    } catch (error) {
      this.setState({ message: errorMessages.messageNetError });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scroll = () => {
    window.scrollBy({
      top: window.screen.availHeight + 30,
      behavior: 'smooth',
    });
  };

  render() {
    const { pictures, message, isLoading, countLoadMore } = this.state;
    return (
      <>
        <GlobalStyle />
        <Container>
          <Searchbar onSearch={this.handleSearch} />
          {message && <Message>{message}</Message>}
          {!message && <ImageGallery galleryItems={pictures} />}
          {isLoading && <Loader />}
          {!message && !isLoading && countLoadMore > 0 && (
            <Button onClick={this.handleLoadMoreButton} />
          )}
        </Container>
      </>
    );
  }
}

export default App;
