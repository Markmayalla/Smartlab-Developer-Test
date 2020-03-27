import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import Guest from './portals/guest'

const Routes = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/weather" component={Guest} />
                <Route>
                    <Redirect to="/weather" />
                </Route>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routes
