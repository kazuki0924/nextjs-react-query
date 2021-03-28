import React from 'react';
import { useQuery } from 'react-query';
import ArticleCollection from '../components/ArticleCollection';

const Home = () => {
  const toJSON = (res: Response) => res.json();
  const fetchArticles = () => fetch('https://dev.to/api/articles').then(toJSON);

  const { data: articles, isLoading, error } = useQuery(
    'articles',
    fetchArticles
  );

  if (isLoading) return 'Loading...';
  if (error) return (error as { message: string })?.message;

  return (
    <div className='max-w-md mx-auto mt-8'>
      <ArticleCollection collection={articles} />
    </div>
  );
};

export default Home;
