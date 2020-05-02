import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Main from './Main';
import Start from './Start';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path="/start" component={Start}></Route>
        
            <Route path="/main" exact component={Main}></Route>
        
        </Switch>
        </BrowserRouter>
    );
}
  


export default Routes;