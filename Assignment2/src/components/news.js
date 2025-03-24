import React, { useState, useEffect } from "react";

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4acef5e2343442aa92ecf06cc1bf036";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNews(data.articles.slice(0, 5));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>Latest News</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {news.length > 0 ? (
          news.map((article, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#007BFF" }}>
                {article.title}
              </a>
            </li>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </ul>
    </div>
  );
};

export default NewsWidget;