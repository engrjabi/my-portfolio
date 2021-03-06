import React from "react";
import _padStart from "lodash/padStart";
import { Link } from "@reach/router";
import { useFetchArticles } from "../../utils/api";

function Articles() {
  const articles = useFetchArticles();

  return (
    <>
      <header>
        <h1>
          This is Phantom, a free, fully responsive site
          <br />
          template designed by <a href="http://html5up.net">HTML5 UP</a>.
        </h1>
        <p>
          Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
          amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
          venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
          ipsum dolor sit amet nullam dolore.
        </p>
      </header>
      <section className="tiles">
        {articles.map((article, index) => {
          return (
            <article key={index} className={`style${(index % 6) + 1}`}>
              <span className="image">
                <img
                  src={`/images/pic${_padStart((index % 12) + 1, 2, "0")}.jpg`}
                  alt=""
                />
              </span>
              <Link to={`article/${index}`}>
                <h2>{article.obj.title}</h2>
                <div className="content">
                  <p>
                    Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                    veroeros et feugiat.
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Articles;
