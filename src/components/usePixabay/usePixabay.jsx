import { useState, useEffect } from 'react';
import axios from 'axios';
import { constAxios } from '../Constants/Constants';

export default function usePixabay() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query) {
      const controller = new AbortController();

      (async () => {
        try {
          const response = await axios.get(constAxios.BASE_URL, {
            params: {
              key: constAxios.KEY,
              q: query,
              image_type: 'photo',
              orientation: 'horizontal',
              savesearch: true,
              page,
              per_page: constAxios.PER_PAGE,
            },
          });
          setData(response.data);
        } catch {
          setData(-1);
        }
      })();

      return () => {
        controller.abort();
      };
    }
  }, [page, query]);

  const incPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const newQuery = query => {
    setPage(1);
    setQuery(query);
  };

  return { data, incPage, newQuery };
}
