import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import WeatherPage from '../pages/guest/weatherPage'

const Guest = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/weather/default" component={WeatherPage} />
                <Route>
                    <Redirect to="/weather/default" />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Guest
