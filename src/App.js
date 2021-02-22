import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavigation from './Navigation/MainNavigation';
import Clients from './client/pages/Clients';

let routes;

const App = () => {
    routes = (
        <Switch>
            <Route path="/" exact>
                 <Clients />
            </Route>
            <Route path="/clienti/new" exact>
               
            </Route>
            <Route path="/clienti/:clientId" exact>
                <Clients />
            </Route>
           
        </Switch>
    );

    return (
        <Router>
            <MainNavigation />
            <main>
                {routes}
            </main>
        </Router>
    )
};

export default App;