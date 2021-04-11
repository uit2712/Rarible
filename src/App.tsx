import React from 'react';
import './App.css';
import { routerUrl } from './common/constants';
import { Route } from 'react-router';
import Loading from './common/components/Loading';
import Layout from './common/components/layout/Layout';
const ExplorePage = React.lazy(() => import(/* webpackChunkName: 'explore-page' */'./pages/ExplorePage'));
const CollectiblePage = React.lazy(() => import(/* webpackChunkName: 'collectible-page' */'./pages/CollectiblePage'));

function App() {
    return (
        <Layout>
            <React.Suspense fallback={<Loading/>}>
                <Route exact path={routerUrl.home} component={ExplorePage} />
                <Route path={routerUrl.collectible} component={CollectiblePage} />
            </React.Suspense>
        </Layout>
    );
}

export default App;
