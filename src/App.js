import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import ExplorerPage from "./pages/explorer-page";
import BlockPage from "./pages/block-page";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
      <Router>
      <Switch>
        <Route path="/explorer" exact={true}>
          <ExplorerPage />
        </Route>
        <Route path="/block/:blockHash" exact={true}>
          <BlockPage />
        </Route>
        <Route path="/" exact={true}>
          <Redirect to="/explorer"/>
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
