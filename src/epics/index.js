
import { combineEpics } from 'redux-observable';
import {fetchWeatherEpic} from './epic_weather_fetch';


export const rootEpic = combineEpics(
    fetchWeatherEpic
);