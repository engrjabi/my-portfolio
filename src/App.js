import React from "react";
import { Router } from "@reach/router";
import BaseLayout from "./components/layout/baseLayout";
import { useLoadThirdParty } from "./utils/useLoadThirdParty";
import Articles from "./components/articles/articles";
import "./App.css";
import Article from "./components/article/article";

const thirdPartyLibs = [
  "/assets/js/jquery.min.js",
  "/assets/js/browser.min.js",
  "/assets/js/breakpoints.min.js"
];

function App() {
  const [isReady] = useLoadThirdParty(thirdPartyLibs);

  if (!isReady) {
    return <div>Loading Assets</div>;
  }

  require("./utils/legacyCode");

  return (
    <BaseLayout>
      <Router>
        <Articles path="/" />
        <Article path="article/:articleId" />
      </Router>
    </BaseLayout>
  );
}

export default App;
