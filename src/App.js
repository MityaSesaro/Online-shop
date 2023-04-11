import React from 'react';
import './App.scss';
import Router from './components/Router'
import Buttons from './components/Buttons'


class App extends React.Component {
    render() {
        return (
            <div>
                <Router />
            </div>
        );
    }
}

export default App