import RecentlyAdded from '../Components/RecientlyAdded'; 
import { Article } from '../Components/types';

const ArticleCards = ({ articles }: { articles: Article[] }) => {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="shadow mb-4 py-4 rounded-lg">
        <h1 className="text-3xl text-white font-bold">ALL CONTENT</h1>
      </div>
      <RecentlyAdded articles={articles} />
    </main>
  );
};

export default ArticleCards;
