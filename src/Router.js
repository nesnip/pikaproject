import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';

const Router = () => {
    return (
      <BrowserRouter>
          <div className="router-views">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/" component={Login} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  };
  
  export default Router;