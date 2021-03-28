import { toJSON } from '../utils/toJSON';

export interface Article {
  title: string;
  tag_list: string[];
}

export const fetchArticles = () =>
  fetch('https://dev.to/api/articles').then(toJSON);

const ArticleCollection = ({
  collection: articles,
}: {
  collection: Article[] | undefined;
}) => {
  return (
    <div className='bg-white shadow rounded'>
      <ul className='divide-y divide-gray-200'>
        {articles?.map(({ title, tag_list }: Article) => (
          <li>
            <a href='' className='block hover:bg-gray-100'></a>
            <div className='p-4'>
              <div className='flex justify-between items-center'>
                <div className='text-lg text-blue-400'>{title}</div>
                <div className='ml-2'>
                  {tag_list.map((tag: any) => (
                    <div className='ml-1 inline-flex px-2 text-xs rounded-full bg-gray-200 text-gray-700'>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCollection;
