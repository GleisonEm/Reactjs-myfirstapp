import React from 'react';
import './styles.css';
import logo from '.././logo.svg';
import {Link} from 'react-router-dom';
import Header from '../header';
import '.././global.css';



function Start() {
  return (
    <div className="App-header">
      <Header/>
    

    <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edite e salve o código para atualizar.
       </p>

       
      <div className="App-action">
      
      <Link className="buttons" to="/main">
        <button>
          Login
        </button>
      </Link>
        
            
            
     
       
       <button>Register</button>
       </div>
     
       
   
     </header>
 
 </div>



  );
}

export default Start;
