import { useParams } from 'react-router-dom';
import CustomCard from '../Components/CustomCard';

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  author: string;
  articleUrl: string;
  publishedDate: string;
  publisher: string;
  categories: string;
  tags: string;
  content: string;
}

const CategoryPage = ({ articles }: { articles: Article[] }) => {
  const { category } = useParams<{ category: string }>();

  // Convert hyphens back to spaces for matching categories
  const formattedCategory = (category ?? '').replace(/-/g, ' ').toLowerCase();

  // Convert the category name to uppercase
  const uppercaseCategory = formattedCategory.toUpperCase();

  // Filter articles based on the category
  const filteredArticles = articles.filter(article =>
    article.categories.split(", ").map(cat => cat.trim().toLowerCase()).includes(formattedCategory)
  );

  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="shadow mb-4 py-4 rounded-lg">
        <h1 className="text-3xl text-white font-bold">{uppercaseCategory}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {filteredArticles.map(article => (
            <CustomCard key={article.id} articles={articles} articleId={article.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;


