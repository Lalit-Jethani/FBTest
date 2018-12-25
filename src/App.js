import React, { Component } from 'react';
import './App.css';
import Facebook from './Login'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import PhotosList from "./photosList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <BrowserRouter>
            <div>
            
            <Route path = '/' exact   render = {
                () => {
                 return (<div><h1>Welcome to my page </h1>
                  <Facebook />
                  <PhotosList />
                  </div>)
                }
            } />
            </div>
          </BrowserRouter>
        </header> 
      
      </div>
    );
  }
}

export default App;