import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "utils/theme";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {seTranslation} from "react-i18next";

import { Navigation, Wrapper, LoadingIndicator, Button } from "components";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: t("Homepage"), to: "/" },
            { content: t("Budget"), to: "/budget" },
          ]}
          RightElement={
            <div>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("pl")}
              >
                pl
              </Button>
              <Button
                variant="regular"
                onClick={() => i18n.changeLanguage("en")}
              >
                en
              </Button>
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
    </div>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  );
}

export default RootApp;
