import RecentlyAdded from '../Components/RecientlyAdded'; // Adjust the path as needed

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  publishedDate: string;
  excerpt: string;
}

interface ArticleCardsProps {
  articles: Article[];
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ articles }) => {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="shadow mb-4 py-4 rounded-lg">
        <h1 className="text-3xl text-white font-bold">Category Name / Search Results</h1>
      </div>
      <RecentlyAdded articles={articles} />
    </main>
  );
};

export default ArticleCards;
