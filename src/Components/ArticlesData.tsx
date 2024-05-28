import { useState, useEffect } from "react";
import axios from "axios";

interface IArticleRaw {
  id: number;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
}

interface ArticleInterface {
  id: number;
  link: string;
  title: string;
  content: string;
  excerpt: string;
  author: number;
}

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://blogbackend.mfelobes.ca/wp-json/wp/v2/articles")
      .then((res) => {
        const fetchedArticles = res.data.map((article: IArticleRaw) => ({
          id: article.id,
          link: article.link,
          title: article.title.rendered,
          content: article.content.rendered,
          excerpt: article.excerpt.rendered,
          author: article.author,
        }));
        setArticles(fetchedArticles);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          <p>Author ID: {article.author}</p>
          <a href={article.link}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default Articles;
