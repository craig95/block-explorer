import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './store';
import ExplorerPage from './pages/explorer/explorer-page';
import BlockPage from './pages/block-page/block-page';
import NotFoundPage from './pages/not-found-page';

const AppWrapper = styled.div`
    padding: 1.5rem;
    @media screen and (min-width: 1024px) {
        max-width: 75rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

function App() {
    return (
        <Provider store={store}>
            <AppWrapper>
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
            </AppWrapper>
        </Provider>
    );
}

export default App;
