import React from "react";
import CustomCard from "../Components/CustomCard";
import { Article } from "../types"; // Import the Article type
import ArticleCards from "./ArticleCards";

interface HomepageProps {
  articles: Article[]; // Add the 'articles' property to the type
}

const Homepage: React.FC<HomepageProps> = ({ articles }) => {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="shadow mb-4 py-4  rounded-lg">
        <h1 className="text-3xl text-white font-bold">TOP PICKS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={24} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={27} articles={articles} /> {/* Pass the correct types */}
      </div>
      <ArticleCards articles={articles} /> 
    </main>
  );
};

export default Homepage;
