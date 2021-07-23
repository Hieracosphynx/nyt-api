import { useState, useCallback } from 'react';
import noImage from '../assets/noimage.jpg';
const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchHttp = useCallback(
    async (search, applyData) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${API_KEY}`
        );
        const data = await response.json();
        const headlines = [];

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        for (const count in data.response.docs) {
          headlines.push({
            id: count,
            abstract: data.response.docs[count].abstract,
            web_url: data.response.docs[count].web_url,
            lead_paragraph: data.response.docs[count].lead_paragraph,
            multimedia: data.response.docs[count].multimedia[0]
              ? `https://www.nytimes.com/${data.response.docs[count].multimedia[0].url}`
              : noImage,
          });
        }
        console.log(headlines);
        applyData(headlines);
        setIsLoading(false);
      } catch (e) {
        setError(e.message || 'Wth?! This is embarrassing...');
      }
    },
    [API_KEY]
  );

  return {
    error: error,
    loading: isLoading,
    searchHttp: searchHttp,
  };
};

export default useHttp;
