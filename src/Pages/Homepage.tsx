import React from "react";
import CustomCard from "../Components/CustomCard";
import { Article } from "../types"; // Import the Article type

interface HomepageProps {
  articles: Article[]; // Add the 'articles' property to the type
}

const Homepage: React.FC<HomepageProps> = ({ articles }) => {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
        <CustomCard articleId={22} articles={articles} /> {/* Pass the correct types */}
      </div>
    </main>
  );
};

export default Homepage;
