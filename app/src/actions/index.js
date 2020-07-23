import axios from  'axios'
import { bindActionCreators } from 'redux'
import {initialState} from '../readucer/reducer'




export const FETCH_WEATHER_START = "FETCH_WEATHER_START"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"
// export const FETCH_WEATHER_CITY = "FETCH_WEATHER_CITY"

export const fetchReports = (newCity) => {
    return dispatch => {
        dispatch({type: FETCH_WEATHER_START})
        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=a635da4f8eb097418cecae91074f75ae&units=imperial`)
        .then( res => {
            dispatch({type: FETCH_WEATHER_SUCCESS, payload: res.data.weather , payload2: res.data.main , payload3: res.data.name})
        })
        .catch(err => {
            dispatch({type: FETCH_WEATHER_FAILURE , payload: err.message})
        })
    }
}