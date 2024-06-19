import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchResults from "./SearchResults"; // Ensure this is the correct path to your SearchResults component
import { Article } from "../types";

const SearchForm = ({ articles }: { articles: Article[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const results = articles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleCloseSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      handleCloseSearch();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={searchRef} className="relative flex w-full md:w-auto">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        className="text-md md:text-sm text-white relative z-10 h-8 w-full md:w-80 rounded-lg border bg-transparent pr-6 outline-none focus:rounded-lg focus:cursor-text focus:border-Orange px-3"
        placeholder="Typing..."
      />
      <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 flex items-center justify-center bg-transparent border border-Orange rounded-lg peer-focus:relative peer-focus:rounded-l-none peer-focus:border-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          className="fill-white"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
      </button>
      {searchQuery && (
        <div className="absolute top-full mt-2 w-full bg-black text-white rounded-md shadow-lg z-50">
          <div className="flex justify-between items-center p-2 border-b border-gray-700">
            <span>Search Results ({searchResults.length})</span>
            <button onClick={handleCloseSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <SearchResults articles={searchResults} />
        </div>
      )}
    </div>
  );
};

export default SearchForm;
