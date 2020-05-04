import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Main';
import Homepage from './Homepage'
import Start from './Start';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>

            <Route exact={true} path="/" component={Homepage}></Route>
        
            <Route path="/main" exact component={Main}></Route>
        
        </Switch>
        </BrowserRouter>
    );
}
  


export default Routes;