import SearchCard from "./SearchCard"; // Ensure this is the correct path to your SearchCard component
import { Article } from "../types";


const SearchResults = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="absolute top-full mt-2 w-full md:w-auto max-h-100 overflow-y-scroll bg-black text-white rounded-md shadow-lg z-50">
      {articles.length > 0 ? (
        articles.map((article) => (
          <SearchCard key={article.id} article={article} />
        ))
      ) : (
        <div className="text-center w-full text-white p-4">No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
