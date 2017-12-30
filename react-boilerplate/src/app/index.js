import React from "react";
import { render } from "react-dom";
// import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { BrowserRouter as Router, Route, browserHistory } from "react-router";
import { Root } from "./components-route/Root";
import { Home } from "./components-route/Home";
import { User } from "./components-route/User";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                    <Route path='/user' component={User} />
                    <Route path='/home' component={Home} />
            </Router>
            // <Router history={browserHistory}>
            //     <Route path={"/"} component={Root} >
            //         <IndexRoute component={Home} />
            //         <Route path={"user/:id"} component={User} />
            //         <Route path={"home"} component={Home} />
            //     </Route>
            //     <Route path={"home-single"} component={Home} />
            // </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));
