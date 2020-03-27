export const API = 'API'
export const API_ERROR = 'API_ERROR'
export const API_START = 'API_START'
export const API_FINISH = 'API_FINISH'

export const apiError = error => ({
    type: API_ERROR,
    payload: error
})

export const apiStart = label => ({
    type: `${API_START}_${label}`
})

export const apiFinish = label => ({
    type: `${API_FINISH}_${label}`
})

export const apiRequest =  () => ({
    type:  API
})