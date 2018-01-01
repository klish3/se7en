import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom";
import { Root } from "./components-route/Root";
import { Home } from "./components-route/Home";
import { User } from "./components-route/User";

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Root>
                        <Route exact path="/" component={Home}/>
                        <Route path='/user' component={User} />
                        <Route path='/home' component={Home} />
                </Root>
            </Router>

        );
    }
}

render(<App />, window.document.getElementById('app'));
