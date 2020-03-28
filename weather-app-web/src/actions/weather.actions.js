import { API } from "./api.actions"
import endpoints from "../api/endpoints"

const api_key = '66e64cd7a6cbc39bcddf80db9af61692'

const name = 'WEATHER'

export const WEATHER_FETCH = `${name}_FETCH`
export const WEATHER_UPDATE = `${name}_UPDATE`

export const weatherFetch = (region) => ({
    type: API,
    payload: {
        url: endpoints.current_weather,
        data: {
            q: region,
            appid: api_key,
        },
        transformResponse: parser,
        onSuccess: WEATHER_UPDATE,
        label: WEATHER_FETCH
    },
})

const parser = (res) => {
    return res
}

