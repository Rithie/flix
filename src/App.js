import React, {Component} from 'react';

import {GlobalStyle} from './styles/global'

import Sidebar from './components/Sidebar';


class App extends Component {
    render() {
        return (
            <div className="App">
              <GlobalStyle/>
              <Sidebar/>
            </div>
        );
    }
}
export default App;