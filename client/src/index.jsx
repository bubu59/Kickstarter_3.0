import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdWebProvider } from "@thirdweb-dev/react";
import App from "./App";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdWebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <App />
    </Router>
  </ThirdWebProvider>
);
