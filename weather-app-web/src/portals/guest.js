import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DarWeatherPage from '../pages/guest/darWeatherPage'

const Guest = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/weather/dar" component={DarWeatherPage} />
                <Route>
                    <Redirect to="/weather/dar" />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Guest
