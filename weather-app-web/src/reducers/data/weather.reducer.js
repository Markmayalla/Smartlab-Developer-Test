import { API_START, API_FINISH } from "../../actions/api.actions"
import { WEATHER_FETCH, WEATHER_UPDATE } from "../../actions/weather.actions"

const initObj = {
    isLoading: false,
    data: null
}

const weatherReducer = (state=initObj, action) => {
    switch (action.type) {
        case `${API_START}_${WEATHER_FETCH}`:
            return {...state, isLoading: true}
        case `${API_FINISH}_${WEATHER_FETCH}`:
            return {...state, isLoading: false}
        case WEATHER_UPDATE:
            return {...state, data: action.payload}
    }
    return state
}

export default weatherReducer