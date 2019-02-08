import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Lights from './containers/Lights/Lights';
import All from './containers/All/All';
import Home from './containers/Home/Home';
import ESP from './containers/ESP/ESP';


import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/all/esp_data" exact component={ESP} />
                        <Route path="/all" exact component={All} />
                        <Route path="/lights" component={Lights} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
