
import * as ActionTypes from "../ActionTypes";


export function fetchWeather (term) { return {type: ActionTypes.FETCH_WEATHER, payload: term }}
export function fetchWeatherFulfilled (body){ return { type: ActionTypes.FETCH_WEATHER_FULFILLED, payload: body }}