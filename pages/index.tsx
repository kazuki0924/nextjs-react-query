import React from 'react';
import { useQuery } from 'react-query';
import ArticleCollection, {
  Article,
  fetchArticles,
} from '../components/ArticleCollection';

const Home = () => {
  const { data: articles, isLoading, error } = useQuery<Article[], Error>(
    'articles',
    fetchArticles
  );

  if (isLoading) return 'Loading...';
  if (error) return (error as { message: string })?.message;

  return (
    <div className='max-w-4xl mx-auto mt-4'>
      <ArticleCollection collection={articles} />
    </div>
  );
};

export default Home;
