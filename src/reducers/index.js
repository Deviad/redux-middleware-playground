import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
export const rootReducer = combineReducers({
    weather: weatherReducer
});
