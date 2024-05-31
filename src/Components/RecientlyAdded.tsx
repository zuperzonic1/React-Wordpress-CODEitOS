import React from "react";
import CustomCard from "./CustomCard"; // Ensure the path is correct for your project
import { Article } from "./types"; // Add the import for the Article type

const RecentlyAdded: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {articles.map((article: Article) => (
        <CustomCard key={article.id} articleId={article.id} articles={articles} />
      ))}
    </div>
  );
};

export default RecentlyAdded;
