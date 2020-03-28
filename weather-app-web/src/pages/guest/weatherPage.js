import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { weatherFetch } from '../../actions/weather.actions'

var WeatherPage = ({ weather, fetchWeather }) => {
    const [active, setActive] = useState(0)
    
    const regions = ['Dar es Salaam', 'Dodoma', 'Mwanza']
    
    const changeRegion = (index) => {
        setActive(index)
        fetchWeather(regions[active])
    }

    useEffect(() => {
        if (!weather.data && !weather.isLoading) {
            fetchWeather(active)
        }
    })

    return (
        <div className="weather">
            {weather.isLoading && <p>Loading...</p>}
            <div className="temperature">
                <div className="degrees">81&#186;</div>
                <div className="condition">Sunny</div>
                <div className="region">Dar Es Salaam</div>
            </div>
            <div className="wrapper">
                <Card icon="fas fa-wind" value="1.6" unit="km/h" title="Wind" color="#e90391" />
                <Card icon="fas fa-tint" value="75" unit="%" title="Humidity" color="#3b10b5" />
                <Card icon="fas fa-tachometer-alt" value="1025" unit="hpa" title="Pressure" color="#3b10b5" />
            </div>
            <ul>
                <li className={`${active === 0 ? 'active' : ''}`} onClick={() => changeRegion(0)}>Dar Es Salaam</li>
                <li className={`${active === 1 ? 'active' : ''}`} onClick={() => changeRegion(1)}>Dodoma</li>
                <li className={`${active === 2 ? 'active' : ''}`} onClick={() => changeRegion(2)}>Mwanza</li>
            </ul>
        </div>
    )
}

const Card = ({ icon, value, unit, title, color }) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <i class={`${icon} fa-3x`}></i>
            <div>{value}<small>{unit}</small></div>
            <div className="title">{title}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather
})

const mapDispatchToProps = dispatch => ({
    fetchWeather: (region) => dispatch(weatherFetch(region))
})

WeatherPage = connect(mapStateToProps, mapDispatchToProps)(WeatherPage)

export default WeatherPage
