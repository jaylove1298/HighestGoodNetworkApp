import React from 'react';
import Timelog from './components/Timelog';
import Reports from './components/Reports';
import Profile from './components/Profile'
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import {Logout} from './components/Logout';
import Login from './components/Login';
import ForcePasswordUpdate from './components/ForcePasswordUpdate';
import ProtectedRoute from './components/common/ProtectedRoute'
import UpdatePassword from './components/UpdatePassword'


export default (
    <Switch>
    <ProtectedRoute path="/dashboard" exact component={Dashboard} />
    <ProtectedRoute path="/timelog/:userId" exact component={Timelog} />
    <ProtectedRoute path="/Reports" exact component={Reports} />      
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/dashboard" exact component={Dashboard} />
    <ProtectedRoute path="/timelog/:userId" exact component={Timelog} />
    <ProtectedRoute path="/reports" exact component={Reports} />
    <ProtectedRoute path="/profile/:userId" component={Profile} />
    <ProtectedRoute path="/updatePassword/:userId" component={UpdatePassword} />
    <Route path="/Logout" component={Logout} />
    <Route path = "/forcePasswordUpdate/:userId" component = {ForcePasswordUpdate}/>
    <ProtectedRoute path = "/" exact component = {Dashboard}/>
    </Switch>
);