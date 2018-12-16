import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import GistDetailsContainer from './components/GistDetails/GistDetailsContainer';
import Home from './components/Home'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/gist/:gistID" component = {GistDetailsContainer}/>
                    <Route path="/" component = {Home}/>

                </Switch>

            </div>
        </BrowserRouter>
    );
  }

}

export default App;

