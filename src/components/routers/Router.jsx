import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './../pages/404/index';
import Home from './../pages/dashboard/Home';
import URL from './../../utils/helpers/URL';
import SignUp from '../pages/auth/SignUp';
import SignIn from './../pages/auth/SignIn';
import Contributor from "./../pages/contributor/Contributor";
import Task from '../pages/task/Task';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={URL.HOME} component={Task} ></Route>
                <Route path={URL.SIGN_UP} component={SignUp}></Route>
                <Route path={URL.SIGN_IN} component={SignIn}></Route>

                <Route path={URL.CONTRIBUTOR} component={Contributor}></Route>

                {/* view all tasks */}
                <Route exact path={URL.TASK_MANAGEMENT} component={Task}></Route>

                {/* <Route path={URL.QUESTIONS} component={Questions}></Route> */}
                <Route default component={NotFound}></Route>

            </Switch>
        </BrowserRouter>
    )
}
