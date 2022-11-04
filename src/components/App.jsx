import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyle/GlobalStyle.styled';

import Searchbar from './Searchbar/Searchbar';
import Container from './Container/Container';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Message from './Message/Message.styled';

import usePixabay from './usePixabay/usePixabay';
import { errorMessages } from './Constants/Constants';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [countLoadMore, setCountLoadMore] = useState(0);
  const { data, incPage, newQuery } = usePixabay();

  const handleSearch = ({ text }) => {
    setCountLoadMore(0);
    setIsLoading(true);
    setMessage(null);
    setPictures([]);
    newQuery(text);
  };

  const loadMore = () => {
    setIsLoading(true);
    incPage();
  };

  useEffect(() => {
    if (!data) {
      return;
    } else if (data === -1) {
      if (!message) {
        setMessage(errorMessages.messageNetError);
        setIsLoading(false);
        return;
      }
    }

    const { hits, totalHits } = data;

    if (totalHits === 0) {
      setMessage(errorMessages.messageNoImages);
      setIsLoading(false);
      return;
    }
    setPictures(pictures => [...pictures, ...hits]);
    setIsLoading(false);
    setIsScroll(countLoadMore);
    countLoadMore === 0
      ? setCountLoadMore(totalHits - hits.length)
      : setCountLoadMore(countLoadMore - hits.length);
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Searchbar onSearch={handleSearch} />
        {message && <Message>{message}</Message>}
        {!message && (
          <ImageGallery galleryItems={pictures} isScroll={isScroll} />
        )}
        {isLoading && <Loader />}
        {!message && !isLoading && countLoadMore > 0 && (
          <Button onClick={loadMore} />
        )}
      </Container>
    </>
  );
}
