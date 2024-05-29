import React from "react";
import CustomCard from "../Components/CustomCard";
// import { Article } from "../types"; // Import the Article type
// import ArticleCards from "./ArticleCards";
import RecentlyAdded from "../Components/RecientlyAdded";

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
interface HomepageProps {
  articles: Article[]; 
}

const Homepage: React.FC<HomepageProps> = ({ articles }) => {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="shadow mb-7 mt-10  rounded-lg">
        <h1 className="text-3xl text-white font-bold">TOP PICKS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={24} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={27} articles={articles} /> {/* Pass the correct types */}
      </div>
      <div className="shadow mb-7 mt-10 rounded-lg">
        <h1 className="text-3xl text-white font-bold">Reciently Added</h1>
      </div>
      <RecentlyAdded articles={articles} />
    </main>
  );
};

export default Homepage;
