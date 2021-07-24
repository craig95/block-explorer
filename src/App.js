import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import ExplorerPage from './pages/explorer-page';
import BlockPage from './pages/block-page';
import NotFoundPage from './pages/not-found-page';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/explorer" exact>
                    <ExplorerPage />
                </Route>
                <Route path="/block/:blockHash" exact>
                    <BlockPage />
                </Route>
                <Route path="/" exact>
                    <Redirect to="/explorer" />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
