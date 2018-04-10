import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PhotoDetailScreen from './containers/PhotoDetailScreen';
import PhotoListScreen from './containers/PhotoListScreen';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={PhotoListScreen} />
                    <Route path="/:id" component={PhotoDetailScreen} />
                </div>
            </Router>
        );
    }
}

export default App;
