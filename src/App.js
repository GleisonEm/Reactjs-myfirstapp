import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Routes from "./routes";
import Main from './Main';
import Start from './Start';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App-header">
      <Header/>
      <Routes/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite e salve o código para atualizar.
        </p>

        
        <div className="App-action">
        <Link to="/start">Login</Link>
       
       
      
         
        <button>Register</button>
        </div>
       
        
     
      </header>
      <main>
       
       <Switch>

           <Route exact path="/start" component={Start}></Route>
       
           <Route path="/main" exact component={Main}></Route>
       
       </Switch>
       </main>
    </div>
  );
}

export default App;
