import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Menu from "./Menu";
import Users from "./Users";
import Tasks from "./Tasks";

const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={Users} />
                <Route path="/tasks" component={Tasks} />
            </Switch>
        </Router>
    );
};

export default App;
