import { API, apiError, apiFinish, apiStart } from "../actions/api.actions"
import Axios from "axios";

const apiMiddleware = ({dispatch, getState}) => next => action => {
    next(action)

    if (action.type !== API) {
        return;
    }

    const {
        url, 
        onSuccess, 
        onFailure, 
        onPromise = false,
        method = 'get', 
        data,
        label,
        resolve,
        reject,
        //transformRequest,
        transformResponse,
        isMultipartFormData,
    } = action.payload

    const dataProperty = ['get','delete'].includes(method) ? 'params' : 'data';

    //Adding token to axios request if the token exists
    var headers = {}
    const user = getState().user
    const dealer = getState().dealerPlus

    if (user && user.token) {
        headers.Authorization = `Bearer ${user.token}`
    }
    else if (dealer && dealer.token)
    {
        headers.Authorization = `Bearer ${dealer.token}`        
    }
    if(typeof isMultipartFormData !== 'undefined'|| isMultipartFormData)
    {
        headers = {...headers, 'Content-Type': 'multipart/form-data'}
    }

    dispatch(apiStart(label))
    Axios.request({
        url, 
        method,
        headers,
        [dataProperty]: data,})
        .then(({data}) => transformResponse ? transformResponse(data) : data)
        .then(data => {
            if (!onPromise) {
                dispatch({type: onSuccess, payload: data})
            } else {
                dispatch({
                    type: onPromise,
                    payload: data,
                    resolve: resolve,
                    reject: reject,
                })
            }
            dispatch(apiFinish(label))
        })
        .catch(error => {
            if (error) {
                dispatch(apiError(error))
            }

            if (onFailure) {
                dispatch(onFailure(error))
            }
        })
}

export default apiMiddleware