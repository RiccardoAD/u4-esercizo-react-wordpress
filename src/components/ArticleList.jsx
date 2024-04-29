import React, { useState, useEffect } from "react";

 export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost/esercizio/wp-json/wp/v2/pages/");


        if (!response.ok) {
          throw new Error("Errore durante il recupero degli articoli");
        }
        const data = await response.json();
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="mt-4">
      <h1>Lista degli Articoli</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

