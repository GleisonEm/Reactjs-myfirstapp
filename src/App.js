import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header";
import Routes from "./routes"


function App() {
  return (
    <div className="App-header">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite e salve o código para atualizar.
        </p>

        <div className="App-action">
        {/* <BrowserRouter>
        <Link to={'/main'}>Login</Link>
        </BrowserRouter> */}
       
      
         
        <button>Register</button>
        </div>
     
      </header>
    </div>
  );
}

export default App;
