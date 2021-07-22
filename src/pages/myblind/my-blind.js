import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './blind.module.scss'
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom'

const MyBlind = (props) => {
    let match = useRouteMatch();

    return (
        <div className={classes.container}>
            <h2>blind</h2>
            <span className={classes.search}>
                <input type="text"/>
            </span>
            <Router>
                <Link to={match.path}>Home</Link>
                <Link to={`${match.path}/company`}>Company Reviews </Link>
                <Link to={`${match.path}/salaries`}>Salaries </Link>
            </Router>
            <Switch>
                <Route path={match.path}>
                    <div>Home Page</div>
                </Route>
                <Route path={`${match.path}/company`}>
                    <div> Company Reviews </div>
                </Route>
                <Route path={`${match.path}/salaries`}>
                    <div> Company Salaries </div>
                </Route>
            </Switch>
        </div>
    );
};

MyBlind.propTypes = {};
MyBlind.defaultProps = {};

export default MyBlind;
