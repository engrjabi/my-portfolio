import React from "react";
import { useFetchArticles } from "../../utils/api";

function Article({ articleId }) {
  const articles = useFetchArticles();
  const article = articles[articleId];

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <h1>{article.obj.title}</h1>
          <span className="image main">
            <img src="/images/pic13.jpg" alt="" />
          </span>
          <div dangerouslySetInnerHTML={{ __html: article.contentEncoded }} />
        </div>
      </div>
    </div>
  );
}

export default Article;
