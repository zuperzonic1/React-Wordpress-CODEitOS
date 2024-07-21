import { useParams } from 'react-router-dom';
import HighlightCode from '../Components/HighlightCode';
import { Article } from '../Components/types';
import {Interweave} from 'interweave';
import { useEffect } from 'react';

const ArticleDetails = ({ articles }: { articles: Article[] }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((a) => `${a.id}` === articleId);

  useEffect(() => {
    const autoplay = document.querySelectorAll('video.autoplay');
    autoplay.forEach((video) => {
      video.setAttribute('autoplay', '');
      video.setAttribute('playsinline', '');
    });
  }, []);

  useEffect(() => {
    const imageElement = document.getElementById('article-image');
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (article && article.code) {
      const script = document.createElement('script');
      script.textContent = article.code;
      script.defer = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className="p-4 m-4 mx-auto max-w-7xl bg-gray-900 bg-opacity-50 text-white rounded-lg mt-14">
      {article.imageUrl && (
        <div className="my-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded"
            id="article-image"
          />
        </div>
      )}
      <header className="py-4">
        <h1 className="text-4xl font-bold">{article.title}</h1>
      </header>
      <article className="prose prose-invert max-w-none">
        <div className="flex flex-wrap gap-4 mb-4">
          {article.date && (
            <p className="text-lg">
              <strong>Published on:</strong> {article.date}
            </p>
          )}
          {article.modified && (
            <p className="text-lg">
              <strong>Last Modified:</strong> {article.modified}
            </p>
          )}
          {article.publishedDate && (
            <p className="text-lg">
              <strong>Article Published Date:</strong> {article.publishedDate}
            </p>
          )}
          {article.author && (
            <p className="text-lg">
              <strong>Author:</strong> {article.author}
            </p>
          )}
          {article.categories && (
            <p className="text-lg">
              <strong>Categories:</strong> {article.categories}
            </p>
          )}
          {article.tags && (
            <p className="text-lg">
              <strong>Tags:</strong> {article.tags}
            </p>
          )}
        </div>
        <Interweave className='details' content={article.content} />        
        <HighlightCode />
      </article>
    </main>
  );
};

export default ArticleDetails;


