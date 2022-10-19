import React from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeContextProvider } from "./store/theme-context";
import Layout from "./components/UI/Layout";
import Landing from "./pages/Landing";
import FavoriteQuotes from "./pages/FavoriteQuotes";
import AddQuotes from "./pages/AddQuotes";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/fav-quotes">
            <FavoriteQuotes />
          </Route>
          <Route path="/add-quote">
            <AddQuotes />
          </Route>
        </Switch>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
