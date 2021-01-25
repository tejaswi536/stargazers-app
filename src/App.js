import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Stargazers from "./stargazers/components/Stargazers";
import client from "./shared/apolloClient";
import "./shared/base.css";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Stargazers />
      </ApolloProvider>
    </div>
  );
}

export default App;
