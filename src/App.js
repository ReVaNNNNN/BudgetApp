import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "utils/theme";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navigation, Wrapper } from "components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={
            <div>
              <button>pl</button>
              <button>en</button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
