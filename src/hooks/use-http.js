import { useState } from 'react';

const useHttp = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchHttp = async (search) => {
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
        headlines.push([
          {
            abstract: data.response.docs[count].abstract,
            web_url: data.response.docs[count].web_url,
            snippet: data.response.docs[count].snippet,
            multimedia: data.response.docs[count].multimedia
              ? data.response.docs[count].multimedia
              : [],
          },
        ]);
      }
      setNews(headlines);
      setIsLoading(false);
    } catch (e) {
      setError(e.message || 'Wth?! This is embarrassing...');
    }
  };

  return {
    news: news,
    error: error,
    loading: isLoading,
    searchHttp: searchHttp,
  };
};

export default useHttp;
