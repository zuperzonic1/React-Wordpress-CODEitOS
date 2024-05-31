import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Layout from "./Components/Layout";
import NotFoundPage from "./Pages/NotFoundPage";

const Homepage = React.lazy(() => import("./Pages/Homepage"));
const ArticleCards = React.lazy(() => import("./Pages/ArticleCards"));
const ArticleDetails = React.lazy(() => import("./Pages/ArticleDetails"));
const CategoryPage = React.lazy(() => import("./Pages/CategoryPage"));

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

interface APIArticle {
  id: number;
  _embedded: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    author?: Array<{ name: string }>;
    "wp:term": Array<Array<{ name: string }>>;
  };
  title: { rendered: string };
  date: string;
  modified: string;
  excerpt: { rendered: string };
  acf: { article_url: string; published_date: string; publisher: string };
  content: { rendered: string };
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://blogbackend.mfelobes.ca/wp-json/wp/v2/articles?_embed")
      .then((res) => {
        const simplifiedArticles: Article[] = res.data.map((article: APIArticle) => ({
          id: article.id,
          imageUrl: article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          title: article.title.rendered,
          date: new Date(article.date).toLocaleDateString(),
          modified: new Date(article.modified).toLocaleDateString(),
          excerpt: article.excerpt.rendered,
          author: article._embedded?.author?.[0]?.name || "Unknown",
          articleUrl: article.acf.article_url,
          publishedDate: article.acf.published_date,
          publisher: article.acf.publisher,
          categories: article._embedded["wp:term"]?.[0]?.map((cat) => cat.name).join(", ") || "",
          tags: article._embedded["wp:term"]?.[1]?.map((tag) => tag.name).join(", ") || "",
          content: article.content.rendered,
        }));
        setArticles(simplifiedArticles);
        setIsDataLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const LoadingIndicator = (
    <div className="flex justify-center items-center h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout articles={articles} />,
      children: [
        {
          path: "",
          element: (
            <React.Suspense fallback={LoadingIndicator}>
              <Homepage articles={articles} />
            </React.Suspense>
          ),
        },
        {
          path: "articles",
          element: isDataLoaded ? (
            <React.Suspense fallback={LoadingIndicator}>
              <ArticleCards articles={articles} />
            </React.Suspense>
          ) : (
            LoadingIndicator
          ),
        },
        {
          path: "articles/:articleId",
          element: isDataLoaded ? (
            <React.Suspense fallback={LoadingIndicator}>
              <ArticleDetails articles={articles} />
            </React.Suspense>
          ) : (
            LoadingIndicator
          ),
        },
        {
          path: "category/:category",
          element: isDataLoaded ? (
            <React.Suspense fallback={LoadingIndicator}>
              <CategoryPage articles={articles} />
            </React.Suspense>
          ) : (
            LoadingIndicator
          ),
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
