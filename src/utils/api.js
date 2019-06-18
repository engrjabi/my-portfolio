import useFetch from "fetch-suspense";
import _get from "lodash/get";

const mediumUsername = process.env.REACT_APP_MEDIUM_USERNAME;

export const useFetchArticles = function() {
  const mediumFeed = useFetch(
    `https://medium-rss.engrjabi.win/feed/${mediumUsername}`,
    { method: "GET" }
  );

  return _get(mediumFeed, "response.items", []).filter(
    item => item["contentEncoded"]
  );
};
