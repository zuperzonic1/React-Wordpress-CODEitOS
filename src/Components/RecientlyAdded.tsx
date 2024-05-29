import React from "react";
import CustomCard from "./CustomCard"; // Ensure the path is correct for your project

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  publishedDate: string;
  excerpt: string;
}

interface RecentlyAddedProps {
  articles: Article[];
}

const RecentlyAdded: React.FC<RecentlyAddedProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {articles.map((article) => (
        <CustomCard key={article.id} articleId={article.id} articles={articles} />
      ))}
    </div>
  );
};

export default RecentlyAdded;
